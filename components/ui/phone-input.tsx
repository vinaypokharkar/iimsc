import { Input } from '@/components/ui/input';

export const COUNTRY_CODES = [
  { code: '+91', country: 'India' },
  { code: '+43', country: 'Austria' },
  { code: '+32', country: 'Belgium' },
  { code: '+387', country: 'Bosnia & Herzegovina' },
  { code: '+385', country: 'Croatia' },
  { code: '+45', country: 'Denmark' },
  { code: '+358', country: 'Finland' },
  { code: '+49', country: 'Germany' },
  { code: '+30', country: 'Greece' },
  { code: '+36', country: 'Hungary' },
  { code: '+354', country: 'Iceland' },
  { code: '+352', country: 'Luxembourg' },
  { code: '+31', country: 'Netherlands' },
  { code: '+47', country: 'Norway' },
  { code: '+48', country: 'Poland' },
  { code: '+381', country: 'Serbia' },
  { code: '+421', country: 'Slovakia' },
  { code: '+386', country: 'Slovenia' },
  { code: '+46', country: 'Sweden' },
  { code: '+41', country: 'Switzerland' },
];

interface PhoneInputProps {
  countryCode: string;
  phoneNumber: string;
  onCountryCodeChange: (code: string) => void;
  onPhoneNumberChange: (number: string) => void;
  id?: string;
  required?: boolean;
  className?: string;
}

export function PhoneInput({
  countryCode,
  phoneNumber,
  onCountryCodeChange,
  onPhoneNumberChange,
  id = 'phone',
  required = false,
  className
}: PhoneInputProps) {
  return (
    <div className={`flex gap-2 ${className}`}>
      <div className="w-[140px] shrink-0">
        <select
          value={countryCode}
          onChange={(e) => onCountryCodeChange(e.target.value)}
          className="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-3 text-sm focus:border-[#5C4DFF] focus:ring-[#5C4DFF] transition-all duration-300 outline-none appearance-none cursor-pointer"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
            backgroundPosition: `right 0.5rem center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `1.5em 1.5em`,
            paddingRight: `2.5rem`
          }}
        >
          {COUNTRY_CODES.map((country) => (
            <option key={country.code} value={country.code}>
              {country.code} ({country.country})
            </option>
          ))}
        </select>
      </div>
      <Input 
        id={id}
        type="tel" 
        value={phoneNumber}
        onChange={(e) => onPhoneNumberChange(e.target.value)}
        placeholder="1234567890" 
        required={required}
        className="flex-1 bg-gray-50 border-gray-200 focus:border-[#5C4DFF] focus:ring-[#5C4DFF] h-12 rounded-xl transition-all duration-300" 
      />
    </div>
  );
}
