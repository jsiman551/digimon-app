interface EmptyStateProps {
    description: string,
}

const EmptyState = ({ description }: EmptyStateProps) => (
    <div className="text-center bg-base-100 mt-24">
        <p className="text-2xl">
            {description}
        </p>
    </div>
)

export default EmptyState;
