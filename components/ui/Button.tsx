interface ButtonProps {
    name: string;
    className?: string;
}

export const Button = ({ name,className }: ButtonProps) => {
    return (
        <div>
            <button className={className}>
                {name}
            </button>
        </div>
    );
};
