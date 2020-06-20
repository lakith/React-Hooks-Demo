import React from 'react'

function Title() {
    return (
        <div>
            <h2>Lets See How useCallback works.</h2>
        </div>
    )
}

export default React.memo(Title)
