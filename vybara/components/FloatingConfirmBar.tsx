interface FloatingConfirmBarProps {
  visible: boolean;
  onSave: () => void;
  onDiscard: () => void;
}

export default function FloatingConfirmBar({ visible, onSave, onDiscard }: FloatingConfirmBarProps) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 p-4 flex space-x-3">
        <button
          onClick={onSave}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <span>💾</span>
          <span className="hidden sm:inline">Save Changes</span>
          <span className="sm:hidden">Save</span>
        </button>
        <button
          onClick={onDiscard}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          <span>🗑️</span>
          <span className="hidden sm:inline">Discard Changes</span>
          <span className="sm:hidden">Discard</span>
        </button>
      </div>
    </div>
  );
} 