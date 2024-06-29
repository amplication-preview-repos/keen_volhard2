import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PdfCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="owner" source="owner" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
