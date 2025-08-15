const primaryColor = "bg-[var(--color-primary)] dark:bg-[var(--color-primary)]";
const secondaryColor = "bg-[var(--color-secondary)] dark:bg-[var(--color-secondary)]";
const primaryTextColor = "text-[var(--color-text)] dark:text-[var(--color-text-light)]";
const secondaryTextColor = "text-[var(--color-text-dark)] dark:text-[var(--color-text)]";

interface ActionButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  rank?: 'primary' | 'secondary'; // Using literal types for better type safety
}

export default function ActionButton({
  label,
  onClick,
  disabled = false,
  rank = 'primary',
}: ActionButtonProps) {
    const bgColor = rank === "primary" ? primaryColor : secondaryColor;
    const textColor = rank === "primary" ? primaryTextColor : secondaryTextColor;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-full px-6 py-3 text-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        disabled
          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
          : bgColor + " " + textColor +  " hover:bg-blue-700"
      }`}
    >
      {label}
    </button>
  );
}