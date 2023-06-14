# web-app-utils

This toolkit is used to assist web application developers to complete some common but tedious coding tasks.

```javascript
import _ from 'web-app-utils';
```

## 📖 Contents

[toc]

## 🧾 API List

| API                   | Describe                                                  |
| --------------------- | --------------------------------------------------------- |
| storage.setStorage    | Set up a time-sensitive localstorage                      |
| storage.getStorage    | Get a time-sensitive localstorage                         |
| storage.removeStorage | Remove a time-sensitive localstorage                      |
| deepCopy              | Deep copy an object or an array                           |
| deepEqual             | Deeply compare whether two objects or arrays are the same |

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

**Pramas**

- `obj` **Array|Object**: The object or array that needs to be deep copied
- `return` **Array|Object**: The result of a deep copy

**Example**

```javascript
const obj_clone = _.deepCopy(obj1);
```

### - deepEqual

**Pramas**

- `obj1` **Array|Object**: The object1 or array1 that need to be compared deeply
- `obj2` **Array|Object**: The object2 or array2 that need to be compared deeply
- `return` **boolean**: Returns whether two values are deeply equal

**Example**

```javascript
const result = _.deepEqual(obj1, obj2);
```

