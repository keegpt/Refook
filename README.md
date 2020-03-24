# Refook

Use hooks outside react components!

## Installation

```bash
npm install @keegpt/refook
```

## Usage

```jsx
// your index file

import React from 'react';
import ReactDOM from 'react-dom';

import { SnackbarProvider, useSnackbar } from 'notistack';
import { I18ZenProvider, useI18Zen } from 'react-i18zen';

import en from './locales/en.json';
import pt from './locales/pt.json';

import Refook from '@keegpt/refook';

function Init() {
    return (
        <>
            <I18ZenProvider locales={{ pt, en }} defaultLocale="pt">
                <SnackbarProvider maxSnack={4} anchorOrigin={{ vertical: 'top', horizontal: 'right', }}>
                    <Refook hooks={{ toast: useSnackbar, translation: useI18Zen }} />
                    <div>Hello, world!</div>
                </SnackbarProvider>
            </I18ZenProvider>
        </>
    );
}

ReactDOM.render(<Init />, document.getElementById('root'));
```
```jsx
// anywhere in the project

import { useRefook } from '@keegpt/refook';

export default () => {
    const translatedMessage = useRefook('translation').__('common.success');
    useRefook('toast').enqueueSnackbar(translatedMessage, { variant: "success" });
}

```

### Customize your hook

```jsx

import { useRefook } from '@keegpt/refook';

export default {
    success(msg, options = {}) {
        this.default(msg, { ...options, variant: 'success' })
    },
    warning(msg, options = {}) {
        this.default(msg, { ...options, variant: 'warning' })
    },
    info(msg, options = {}) {
        this.default(msg, { ...options, variant: 'info' })
    },
    error(msg, options = {}) {
        this.default(msg, { ...options, variant: 'error' })
    },
    default(msg, options = {}) {
        useRefook('toast').enqueueSnackbar(msg, options)
    }
}

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)