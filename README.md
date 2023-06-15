# web-app-utils

This toolkit is used to assist web application developers to complete some common but tedious coding tasks.

```javascript
import _ from 'web-app-utils';
```

## 📖 Contents

- [web-app-utils](#web-app-utils)
  - [📖 Contents](#-contents)
  - [🧾 API List](#-api-list)
  - [🔧 Usage](#-usage)
    - [- storage](#--storage)
      - [storage.setStorage](#storagesetstorage)
      - [storage.getStorage](#storagegetstorage)
      - [storage.removeStorage](#storageremovestorage)
    - [- deepCopy](#--deepcopy)
    - [- deepEqual](#--deepequal)
    - [- getType](#--gettype)
    - [- debounce](#--debounce)
    - [- throttle](#--throttle)
    - [- judgePlainObject](#--judgeplainobject)
    - [- token](#--token)
      - [token.setToken](#tokensettoken)
      - [token.getToken](#tokengettoken)


## 🧾 API List

| API                   | Describe                                                  |
| --------------------- | --------------------------------------------------------- |
| storage.setStorage    | Set up a time-sensitive localstorage                      |
| storage.getStorage    | Get a time-sensitive localstorage                         |
| storage.removeStorage | Remove a time-sensitive localstorage                      |
| deepCopy              | Deep copy an object or an array                           |
| deepEqual             | Deeply compare whether two objects or arrays are the same |
| getType               | Get detailed data types                                   |
| debounce              | Debounce a function                                       |
| throttle              | Throttle a function                                       |
| judgePlainObject      | Determine whether an object is an ordinary object         |
| token.setToken        | Set encryption token through json-web-token               |
| token.getToken        | Decrypt token                                             |

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

### - deepCopy

**Params**

- `obj` **Array|Object**: The object or array that needs to be deep copied
- `return` **Array|Object**: The result of a deep copy

**Example**

```javascript
const obj_clone = _.deepCopy(obj1);
```

### - deepEqual

**Params**

- `obj1` **Array|Object**: The object1 or array1 that need to be compared deeply
- `obj2` **Array|Object**: The object2 or array2 that need to be compared deeply
- `return` **boolean**: Returns whether two values are deeply equal

**Example**

```javascript
const result = _.deepEqual(obj1, obj2);
```

### - getType

**Params**

- `value` **any**: The data that needs to be typed
- `return` **string**: Data type

**Example**

```javascript
const type = _.getType(value);
```

### - debounce

Returns a function that can be called multiple times (possibly in quick succession), but only fires the callback after waiting x milliseconds after the last call

**Params**

- `func` **Function**: The function that needs anti-shake
- `delay` **number**: The delay time that needs to be configured for the function, in milliseconds
- `return` **Function**: The processed function

**Example**

```javascript
const new_func = _.debounce(old_func, 1000);
```

### - throttle

Returns a function that can be called multiple times (possibly in quick succession), but only every x milliseconds, triggering the callback.

**Params**

- `func` **Function**: The function that needs throttle
- `interval` **number**: Throttling Interval

- `return` **Function**: The processed function

**Example**

```javascript
const new_func = _.throttle(old_func, 1000);
```

### - judgePlainObject

**Params**

- `obj` **Object**: Object to determine whether it is a plain object
- `return` **boolean**: Returns true if the input object is a plain object, otherwise returns false

**Example**

```javascript
const isPlainObject = _.judgePlainObject(obj);
```

### - token

#### token.setToken

**Params**

- `data` **Object**: The data that the token needs to contain
- `secret` **string**: The encryption key
- `age` **string**: Token validity period
- `return` **string**: A JSON Web Token string

**Example**

```javascript
const token = _.token.setToken({name: 'xxx', phone: 'xxx'}, 'husib&hs2#', '2d');
```

#### token.getToken

**Params**

- `token` **string**: The token that needs to be solved
- `secret` **string**: The encryption key
- `return` **{ status: boolean, data: Object }**: Decrypted data, when the status is true, the decryption is successful, and when it is false, the decryption fails

**Example**

```javascript
const data = _.token.getToken('xxx', 'husib&hs2#');
```

