interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      className="text-sm text-gray-50 bg-orange-500 py-4 px-8 rounded-md uppercase tracking-widest w-full lg:w-60"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
