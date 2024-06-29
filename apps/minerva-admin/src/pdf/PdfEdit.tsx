import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PdfEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="owner" source="owner" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
