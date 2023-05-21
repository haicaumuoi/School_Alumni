import React from 'react'
import { addNotification } from '../../utilities/commonServices/CommonService'

const LandingPage = () => {
    return (
        <div>        <div>LandingPage</div>
            <button onClick={() => {
                addNotification('success', "", 'success message')
            }}>
                prompt
            </button>
        </div>

    )
}

export default LandingPage