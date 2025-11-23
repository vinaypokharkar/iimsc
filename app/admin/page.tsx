'use client';

import { useState, useEffect } from 'react';
import { Loader2, Download, LogOut, ShieldCheck, Eye, MessageSquare, Briefcase } from 'lucide-react';

interface Application {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  position: string;
  resume_filename: string;
  created_at?: string;
}

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [applications, setApplications] = useState<Application[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [activeTab, setActiveTab] = useState<'applications' | 'messages'>('applications');
  
  // Login State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/applications');
      if (res.ok) {
        const data = await res.json();
        setApplications(data);
        setIsAuthenticated(true);
        fetchMessages(); // Also fetch messages
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMessages = async () => {
    try {
      const res = await fetch('/api/contact');
      if (res.ok) {
        const data = await res.json();
        setMessages(data);
      }
    } catch (error) {
      console.error('Failed to fetch messages', error);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success) {
        setIsAuthenticated(true);
        checkAuth(); // Fetch data
      } else {
        setLoginError(data.message || 'Login failed');
      }
    } catch (error) {
      setLoginError('An error occurred');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setIsAuthenticated(false);
    setApplications([]);
    setMessages([]);
    setUsername('');
    setPassword('');
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
          <div className="mb-6 text-center">
            <ShieldCheck className="mx-auto h-12 w-12 text-blue-600" />
            <h1 className="mt-4 text-2xl font-bold text-gray-900">Admin Login</h1>
            <p className="text-gray-600">Secure Access Only</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            
            {loginError && (
              <div className="text-sm text-red-600 bg-red-50 p-2 rounded">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {isLoggingIn ? 'Verifying...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center">
              <ShieldCheck className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Admin Dashboard</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('applications')}
              className={`${
                activeTab === 'applications'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium flex items-center`}
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Job Applications
              <span className="ml-2 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                {applications.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`${
                activeTab === 'messages'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium flex items-center`}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Contact Messages
              <span className="ml-2 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                {messages.length}
              </span>
            </button>
          </nav>
        </div>

        {activeTab === 'applications' ? (
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resume</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applications.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                        No applications found.
                      </td>
                    </tr>
                  ) : (
                    applications.map((app) => (
                      <tr key={app.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {app.created_at ? new Date(app.created_at).toLocaleDateString() : 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{app.full_name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {app.position}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div>{app.email}</div>
                          <div className="text-xs text-gray-400">{app.phone}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-4">
                            <a
                              href={`/api/applications/${app.id}/resume?view=true`}
                              className="inline-flex items-center text-gray-600 hover:text-gray-900"
                              target="_blank"
                              rel="noopener noreferrer"
                              title="View Resume"
                            >
                              <Eye className="mr-1 h-4 w-4" />
                              View
                            </a>
                            <a
                              href={`/api/applications/${app.id}/resume`}
                              className="inline-flex items-center text-blue-600 hover:text-blue-900"
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Download Resume"
                            >
                              <Download className="mr-1 h-4 w-4" />
                              Download
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {messages.length === 0 ? (
              <div className="col-span-full text-center py-12 text-gray-500 bg-white rounded-lg shadow">
                No messages found.
              </div>
            ) : (
              messages.map((msg) => (
                <div key={msg.id} className="bg-white overflow-hidden shadow rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">{msg.name}</h3>
                      <span className="text-xs text-gray-500">
                        {new Date(msg.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 flex items-center mb-1">
                        <span className="font-medium mr-2">Email:</span> {msg.email}
                      </p>
                      {msg.phone && (
                        <p className="text-sm text-gray-500 flex items-center">
                          <span className="font-medium mr-2">Phone:</span> {msg.phone}
                        </p>
                      )}
                    </div>
                    <div className="bg-gray-50 rounded-md p-3 text-sm text-gray-700 whitespace-pre-wrap">
                      {msg.message}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </main>
    </div>
  );
}
