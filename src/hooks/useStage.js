import { useState } from 'react'
import { createStage } from '../gameHelpers'

export const useStage = () => {
    const [stage, setState] = useState(createStage())

    return [stage, setState]
}