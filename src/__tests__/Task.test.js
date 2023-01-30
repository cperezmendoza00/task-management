import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { fireEvent, screen } from '@testing-library/react'
import Task from '../pages/Task'
import { renderComponent } from '../../jest/mocks/jest.setup'


describe('Create task', () => {
    beforeEach(async () => {
        
      })
    
      afterEach(async () => {
        jest.resetAllMocks()
      })
    
      afterAll(async () => {
        
      })

      describe('validate form and save task', () => {
        
        it('should create and show an api key successfully', async () => {
            renderComponent(<Task />)

            expect(screen.getByTestId('test-name-field').firstChild).not.toHaveClass('Mui-error')
            expect(screen.getByTestId('test-state-field')).not.toHaveClass('Mui-error')
            expect(screen.getByTestId('test-deadline-field').firstChild).not.toHaveClass('Mui-error')

            
            fireEvent.click(screen.getByTestId('task-button-save'))

            expect(screen.getByTestId('test-name-field').firstChild).toHaveClass('Mui-error')
            expect(screen.getByTestId('test-state-field')).toHaveClass('Mui-error')
            expect(screen.getByTestId('test-deadline-field').firstChild).toHaveClass('Mui-error')


        })
    })
    

})
