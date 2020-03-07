# Refook

Use hooks outside react components!

## Installation

```bash
npm install @keegpt/refook
```

## Usage

```jsx
// create a file like: loadHooks.js

import Refook from '@keegpt/refook';

import { useSnackbar } from "notistack"; // for toast notifications
import { useI18Zen } from 'react-i18zen'; // for text translations

// you can customize hooks's name
export const { RefookConfigurator , use } = Refook({ translation: useI18Zen, toast: useSnackbar });
```
```jsx
// your index file

import React from 'react';
import ReactDOM from 'react-dom';

import { SnackbarProvider } from 'notistack';
import { I18ZenProvider } from 'react-i18zen';

import en from './locales/en.json';
import pt from './locales/pt.json';

import { RefookConfigurator } from './loadHooks';

function Init() {
    return (
        <>
            <I18ZenProvider locales={{ pt, en }} defaultLocale="pt">
                <SnackbarProvider maxSnack={4} anchorOrigin={{ vertical: 'top', horizontal: 'right', }}>
                    <RefookConfigurator />
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

import { use } from './loadHooks';

export default () => {
    const translatedMessage = use('translation').__('common.success');
    use('toast').enqueueSnackbar(translatedMessage, { variant: "success" });
}

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)