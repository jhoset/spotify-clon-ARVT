const Dots = () => {
    return (
        <svg role="img"
            height="24"
            width="24"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"><path d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>

    )
}
export const DotsButton = ({ id }) => {


    return (
        <>
            <button
                title="More Options"
                className="text-gray-400 hover:text-white"
            >
                <Dots />
            </button>
        </>
    )
}
