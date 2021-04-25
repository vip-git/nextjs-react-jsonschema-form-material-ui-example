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
