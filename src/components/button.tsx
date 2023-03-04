// Allows a 'button' to be used as a link, or a div, or whatever else
// https://betterprogramming.pub/react-polymorphic-components-with-typescript-real-practice-example-94c8a205d079
export const ButtonDefaultAsType = "button" as const;
export type ButtonDefaultAsType = typeof ButtonDefaultAsType;

export type ButtonOwnProps<E extends React.ElementType> = {
  children: React.ReactNode;
  as?: E;
};

export type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps<E>>;

const Button = <E extends React.ElementType = ButtonDefaultAsType>({
  children,
  as,
  ...rest
}: ButtonProps<E>) => {
  const Tag = as || ButtonDefaultAsType;

  return (
    <Tag
      className="inline-block text-center text-sm text-gray-50 bg-orange-500 py-4 px-8 rounded-md uppercase tracking-widest w-full lg:w-60"
      {...rest}
    >
      {children}
    </Tag>
  );
};

export { Button };
