# SchoolZilla

#### (API Reference)

## Student

Schema:

```
{
  _id: firestore_objId,
  reg_id: string,
  username: string,
  name: string,
  dob: string,
  gender: string,
  address: string,
  parent_details: {
    mother_name: string,
    father_name: string
  },
  identification: {
    ident_name: string,
    ident_number: string
  },
  previous_details: {
    prev_school_name: string,
    prev_school_class: string,
    prev_school_marks: number
  },
  personal_details: {
    email: string,
    mob_no: string
  },
  isActive: boolean,
  asOnDate: string
}
```

#### Get All Students

```
  GET /students
```

Returns all students from firestore.

- Query Params: none
- Payload: none
- Headers-Content_Type: application/json
- Success Code: 200
- Response: { firestore obj, with all students data }

#### Login with username and password - student

```
  GET /student/login
```

Returns a student obj with all his/her details from firestore.

- Query Params: none
- Payload: { loginId: string, password: string (JWT) }
- Headers-Content_Type: application/json
- Success Code: 200
- Response: { firestore obj, with particular student data }

#### Add a student

```
  POST /add-students
```

Returns an obj with success code and message.

- Query Params: none
- Payload: Array<StudentObj>
- Headers-Content_Type: application/json
- Success Code: 201
- Response: { message: string }

#### Edit Student details/status

```
  PUT /edit-students
```

Returns an obj with success code and message

- Query Params: none
- Payload: Array<{ student fields }>
- Headers-Content_Type: application/json
- Success Code: 201
- Response: { message: string }

## Non-Student

Schema:

```
{
  _id: firestore_objId,
  reg_id: string,
  username: string,
  name: string,
  dob: string,
  gender: string,
  address: string,
  role: string,
  primary_skill: string | string [],
  parent_details: {
    mother_name: string,
    father_name: string
  },
  identification: {
    ident_name: string,
    ident_number: string
  },
  previous_details: {
    prev_school_name: string,
    prev_school_subject: string
  },
  personal_details: {
    email: string,
    mob_no: string
  },
  isActive: boolean,
  asOnDate: string,
}
```

#### Get All Non-Students

```
  GET /non-student
```

Returns all Non-Students from firestore.

- Query Params: none
- Payload: none
- Headers-Content_Type: application/json
- Success Code: 200
- Response: { firestore obj, with all Non-Student data }

#### Login with username and password - Non-Student

```
  GET non-student/login
```

Returns a non-student obj with all his/her details from firestore.

- Query Params: none
- Payload: { loginId: string, password: string (JWT) }
- Headers-Content_Type: application/json
- Success Code: 200
- Response: { firestore obj, with particular non-student data }

#### Add a non-student

```
  POST /add-non-students
```

Returns an obj with success code and message.

- Query Params: none
- Payload: Array<NonStudentObj>
- Headers-Content_Type: application/json
- Success Code: 201
- Response: { message: string }

#### Edit Non-Student details/status

```
  PUT /edit-non-students
```

Returns an obj with success code and message

- Query Params: none
- Payload: Array<{ non-student fields }>
- Headers-Content_Type: application/json
- Success Code: 201
- Response: { message: string }

## Account Details

Schema:

```
{
  _id: firestore_objId,
  reg_id: string,
  salary: number,
  account_details: {
    bank_name: string,
    bank_account: number,
    branch_name: string,
    ifsc_code: string
  },
  isActive: boolean;
  asOnDate: string
}
```

#### Get All account details

```
  GET /payroll-details
```

Returns all the payroll details from firestore.

- Query Params: none
- Payload: none
- Headers-Content_Type: application/json
- Success Code: 200
- Response: { firestore obj, with all payroll data }

#### Add account details

```
  POST /payroll-details/add-new
```

Returns status code and message when done.

- Query Params: none
- Payload: Array<{ Account-detailsObj }>
- Headers-Content_Type: application/json
- Success Code: 201
- Response: { message: string }

#### Edit account details

```
  PUT /payroll-details/edit-details
```

Returns status code and obj with message when done.

- Query Params: none
- Payload: Array<{ Account-details fields }>
- Headers-Content_Type: application/json
- Success Code: 201
- Response: { message: string }

## Classes and More

#### Class

Schema:

```
{
  _id: firestore_objId,
  class_id: string,
  class_name: string,
  class_sections: Array<string>,
  asOnDate: string
}
```

#### Subjects

Schema:

```
{
  _id: firestore_objId,
  subject_id: string,
  subject_name: string,
  asOnDate: string,
}
```

#### Batch_Year

Schema:

```
{
  _id: firestore_objId,
  batch_year: string,
  batch_start: string,
  batch_end: string,
  class_id: string,
  class_name: string,
  class_section: string,
  student_enrolled: Array<{ reg_id: string, name: string }>,
  subjects: Array<{ sub_id: string, sub_name: string }>
}
```

#### Attendance

Schema:

```
{
  _id: firestore_objId,
  day: Date,
  class_id: string,
  batch_year: string,
  students: [studentId]
}
```
