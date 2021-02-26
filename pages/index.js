import React from 'react';
import MaterialJsonSchemaForm from 'react-jsonschema-form-material-ui';

import schema from '../simple/schema.json';
import uiSchema from '../simple/ui-schema.json';
import formData from '../simple/form-data.json';

export default () => {
  return <MaterialJsonSchemaForm schema={schema} uiSchema={uiSchema} formData={formData} />;
};
