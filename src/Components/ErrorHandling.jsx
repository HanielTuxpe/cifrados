import React from 'react';

function ErrorHandling({ error }) {
    return error ? <div className="error-message">{error}</div> : null;
}

export default ErrorHandling;
