import { COLORS } from '../constants/colors';

export function Input({
  label,
  type = 'text',
  placeholder,
  icon: Icon,
  value,
  onChange,
  error,
  className = '',
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className={`text-xs font-semibold uppercase tracking-wide`} style={{ color: COLORS.text.secondary }}>
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {Icon && (
          <Icon
            size={18}
            className="absolute left-3 pointer-events-none"
            style={{ color: COLORS.text.tertiary }}
          />
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full px-3 py-2.5 pl-10 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
          style={{
            backgroundColor: COLORS.bg.tertiary,
            borderColor: COLORS.border.input,
            color: COLORS.text.primary,
            focusRingColor: COLORS.accent.purple,
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = COLORS.accent.purple;
            e.currentTarget.style.boxShadow = `0 0 0 3px rgba(157, 78, 221, 0.1)`;
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = COLORS.border.input;
            e.currentTarget.style.boxShadow = 'none';
          }}
        />
      </div>
      {error && (
        <p className="text-xs" style={{ color: COLORS.error }}>
          {error}
        </p>
      )}
    </div>
  );
}
