# web-app-utils

This toolkit is used to assist web application developers to complete some common but tedious coding tasks.

```javascript
import _ from 'web-app-utils';
```

## 📖 Contents

[toc]

## 🧾 API List

| API                   | Describe                             |
| --------------------- | ------------------------------------ |
| storage.setStorage    | Set up a time-sensitive localstorage |
| storage.getStorage    | Get a time-sensitive localstorage    |
| storage.removeStorage | Remove a time-sensitive localstorage |

## 🔧 Usage

### - storage

#### storage.setStorage

**Params**

- `key` **string**: The key of localstorage that needs to be stored
- `value` **string**: The value of localStorage that needs to be stored
- `aging` **number**: The effective duration of storage, in hours (optional, by default the time limit is permanent)
- `return` **boolean**: The operation returns 'true' on success and 'false' on failure

**Example**

```javascript
_.storage.setStorage('a', 'b-value', 20);
```

Store a localstorage whose key is 'a', value is 'b-value', and is valid for 20 hours.

#### storage.getStorage

**Params**

- `key` **string**: The key of localstorage that needs to be stored
- `return` **string|null**: If the storage corresponding to 'key' is found and within the valid period, return the corresponding 'value', if not within the valid period or an error occurs, return 'null'

**Example**

```javascript
_.storage.getStorage('a');
```

#### storage.removeStorage

**Params**

- `key` **string**: The key of localstorage that needs to be removed

**Example**

```javascript
_.storage.removeStorage('a');
```

