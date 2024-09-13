import React, { useMemo } from "react";


interface LoadingIconProps extends React.ComponentPropsWithoutRef<"span"> {
  icon: "oval";
  color?: string;
}

function Loader({
  icon = "oval",
  color = "#2d3748",
  ...computedProps
}: LoadingIconProps) {
  const props = {
    icon: icon,
    color: color,
  };
  const iconColor = useMemo(() => {
    return  props.color ;
  }, []);

  return (
    <span {...computedProps}>
      {(() => {
        if (icon === "oval") {
          return (
            <div className="loader-overlay flex items-center justify-center">
              <svg
                width="50" 
                height="50" 
                viewBox="-2 -2 42 42"
                xmlns="http://www.w3.org/2000/svg"
                stroke={iconColor}
                className="w-full h-full"
              >
                <g fill="none" fillRule="evenodd">
                  <g transform="translate(1 1)" strokeWidth="4">
                    <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
                    <path d="M36 18c0-9.94-8.06-18-18-18">
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 18 18"
                        to="360 18 18"
                        dur="1s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </g>
                </g>
              </svg>
            </div>
          );
        }
      })()}
    </span>
  );
}

export default Loader;
