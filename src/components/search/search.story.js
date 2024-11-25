'use strict'

import { storiesOf } from '@kadira/storybook'
import React from 'react'
import Search from './index'

const stories = storiesOf('Search', module)

stories.add('Search component', ({ isDisabled, handleSearch }) => (
    <div className='search' style={{margin: '10px'}}>
        <Search
            disabled={isDisabled}
            onKeyUp={handleSearch}
        />
    </div>
))