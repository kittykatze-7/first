import React from 'react';
import './CustomButton.css';

export default function CustomButton({
  children,
  onClick,
  type = 'button',
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  className = "",
  ...props
}) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      className={[
        "btn",
        `btn--${variant}`,
        `btn--${size}`,
        isDisabled ? "btn--disabled" : "",
        className
      ].join(" ").trim()}
      onClick={onClick}
      disabled={isDisabled}
      aria-busy={loading ? "true" : "false"}
      {...props}
    >
      {loading ? <span className="btn__spinner" aria-hidden="true" /> : null}
      <span className="btn__label">{children}</span>
    </button>
  );
}