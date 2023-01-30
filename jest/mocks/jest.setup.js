import React from 'react'
import { render } from '@testing-library/react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
window.React = React


export function renderComponent(children) {
    const router = createBrowserRouter([
        {
            path: "/",
            element: children,
        }
    ]);
    return render(<RouterProvider router={router} />
    )
}