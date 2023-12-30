# react-admin-clipboard-field

An enhanced react-admin TextField with copy-to-clipboard icon.

# Usage

Copy `src/clipboard-field.tsx` to your source directory.

Use ClipboardField anywhere you would use a TextField.

```
import { ClipboardField } from './clipboard-field';
import { Create, SimpleForm, TextInput } from 'react-admin';

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" />
            <ClipboardField source="summary" />
        </SimpleForm>
    </Create>
);
```

# Props

`ClipboardField` accepts [all props](https://marmelab.com/react-admin/Fields.html#common-field-props) that can be specified on `TextField`.

# Contributions

Please submit a Github Issue for any bug or proposed improvement. Pull requests are very welcomed.
