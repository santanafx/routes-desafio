import React from 'react'

export const Head = (props) => {
    React.useEffect(() => {
        document.title = props.title
    }, [props])
    return (
        <>
        </>
    )
}
