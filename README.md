## NextJS - React JSONSchema Form Material UI - Example

This is a small demo project showcasing compatiblity of nextjs with [react-jsonschema-form-material-ui](https://github.com/vip-git/react-jsonschema-form-material-ui)

```bash
yarn
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### Example Code can be [seen here](./pages/index.js)
```jsx
import React from 'react';
import MaterialJsonSchemaForm from 'react-jsonschema-form-material-ui';

import schema from '../simple/schema.json';
import uiSchema from '../simple/ui-schema.json';
import givenFormData from '../simple/form-data.json';

const theme = {
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
};

export default () => {
  const [formData, setFormData] = React.useState(givenFormData);
  return <MaterialJsonSchemaForm 
            schema={schema} 
            uiSchema={uiSchema} 
            formData={formData} 
            theme={theme} // Optional
            onChange={({ formData }) => setFormData(formData)}
            onSubmit={() => console.log('form submitted')}
          />;
};
```
