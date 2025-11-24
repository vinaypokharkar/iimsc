import React from 'react';

const IconWrapper = ({ className, src }: { className?: string; src: string }) => (
  <div 
    className={className}
    style={{
      maskImage: `url(${src})`,
      WebkitMaskImage: `url(${src})`,
      maskSize: 'contain',
      WebkitMaskSize: 'contain',
      maskRepeat: 'no-repeat',
      WebkitMaskRepeat: 'no-repeat',
      maskPosition: 'center',
      WebkitMaskPosition: 'center',
      backgroundColor: 'currentColor',
    }}
  />
);

export const IconAboutUs = ({ className }: { className?: string }) => (
  <IconWrapper 
    className={className} 
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABcElEQVR4nO3cMWpDQQxFUVXaepR9ZibLSAi4Ch+7+p6np3vAjVExGjDmNhMBAAAAALCWEfEZETsiVkTU4zvlGSt/C/78+5T4jJV9sfC3+IyVdbHwl/iMlauf/If4jJV8LL1e/DGW0AwA4DW1gMppsaYWUDUt1tQCak+LNbWAWtNiTS2galqsqQVUEmsA8DZqcZSEmH5AFSEWFjMS1OJoEWL6AVWEWFjMAMB0bYLFda82weK6V5tgcd2rTbC47tUmWFz3cg2WNN0LAOxixPV+2sTIIbffT5sYOeT2+2kTI4fcfj9tYuSQ2++HGHmO+wHgjBB7jhA7jBA7jBA7jBA7jBA7jPsBMJ1rrGWXvVxjrbrs5Rpru8terrG2uuzlGmvVZS/XGEnTvQBgetSk2HnGRU2JnWdc1Gyx84yLmiV2nnFRU2LnGRc1KXYeAJgup712qKamvXaoZk977VDNmvbaoZqa9tqhmuS1QwAAAABA3OUXg4lujhHTxwcAAAAASUVORK5CYII=" 
  />
);

export const IconServices = ({ className }: { className?: string }) => (
  <IconWrapper 
    className={className} 
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABhElEQVR4nO3cQWrDUAxFUY209Sr77P9dRkMho9oio8jS8z3QSXng4EHLRRAzAAAAAIA0N7OHmW0zW2YWr99dtbmdv5fw++8nLtzczj55KT8Xbm5nnbyU7ws3t3P2Z+Hrws3t+OvFrDf/PKNoAwCoUxlHTogdVcZREGJHlXG0CbGjyjhahNhRZRwFIXZUGUdOiAHAuCuVi27GXKlCdDPmSrVFN2OuVEt0M+ZKFaKbMVcqF90AQEfdgsVFN6luwRKim1S3YNmim1S3YFmim1S3YAnRTapbsLjoBgAAAAAAACj94osxV6qJF7HKZ8XAz5yq/OKLMVeqiRexymetgZ859fGLzweeFQM/c6ry4jPxSuVcxAAI6xZHLroZE0chuhkTR1t0MyaOluhmTByF6GZMHLnoBgA66hYsLrpJdQuWEN2kugXLFt2kugXLEt2kugVLiG5S3YLFRTcA0FG3YHHRTapbsIToJtUtWLboJtUtWEJ0k+oWLC66AQAAAABYA08v690blj5cPwAAAABJRU5ErkJggg==" 
  />
);

export const IconSuccess = ({ className }: { className?: string }) => (
  <IconWrapper 
    className={className} 
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABeklEQVR4nO3XMU7EQBBE0Y766jT3ZIZjgFYiQlsmwMal4j/JyeiPM8uqKgAAAADAn+uqeq2qXVWrqubrjObcRnrEH9+exxnNuY20n1x+pzm9kdaTy280pzfSs8/nheb0RuqvF6wffjI09asGABy5DZYObSS3wTKhjeQ2WHZoI7kNlhXaSG6DZUIbyW2wdGgDAI7cBkuHNpLbYJnQRnIbLDu0kdwGywptJLfBMqGN5DZYOrQBAEdug6VDG8ltsExoI7kNlh3aSG6DZYU2kttgmdBGchssHdoAgCO3wdKhjeQ2WCa0kdwGyw5tJLfBskIbyW2wTGgjuQ2WDm0AwJHbYOnQRnIbLBPaSG6DZYc2kttgWaGN5DZYJrSR3AZLhzYA4MhtsHRoI7kNlgltJLfBskMbyW2wrNBGchssE9pIboOlQxsAcHT50MCxy4cGjl0+NHDs8qGBY5cPDRxjaADA/8XIuhkj62aMrJsxsm7GyLoZIwsAAAAAUP/GJ3aW1DW8oDVfAAAAAElFTkSuQmCC" 
  />
);
