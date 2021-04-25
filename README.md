## NextJS - React JSONSchema Form Material UI - Example

This is a small demo project showcasing compatiblity of nextjs with [react-jsonschema-form-material-ui](https://github.com/vip-git/react-jsonschema-form-material-ui)

```bash
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Example Code can be [seen here](./pages/index.js)
```

import React from 'react';
import MaterialJsonSchemaForm from 'react-jsonschema-form-material-ui';

import schema from '../simple/schema.json';
import uiSchema from '../simple/ui-schema.json';
import givenFormData from '../simple/form-data.json';

export default () => {
  const [formData, setFormData] = React.useState(givenFormData);
  return <MaterialJsonSchemaForm 
            schema={schema} 
            uiSchema={uiSchema} 
            formData={formData} 
            onChange={({ formData }) => setFormData(formData)}
            onSubmit={() => console.log('form submitted')}
          />;
};
```
