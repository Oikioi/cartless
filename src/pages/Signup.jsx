import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import {
  AutoComplete,
  Button,
  Form,
  Input,
  Select,
} from 'antd';
import './signup.css'

const { Option } = Select;
// const onFinish = (values) => {
//   console.log('Success:', values);
// };
// const onFinishFailed = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
export const SignupForm = () => {
  const [form] = Form.useForm();

  // const onFinish = (values) => {
  //   console.log('Received values of form: ', values);

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  onFinish={onFinish}
  onFinishFailed={onFinishFailed}
  AutoComplete="off";
  

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="1">+1</Option>
        <Option value="86">+86</Option>
      </Select>
    </Form.Item>
  );

 

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  return (
    <div className = 'container'>

      <h1 className='siteName'>cartLess</h1>

      <div className='formContainer'>

      <Form
    className='signUpForm'
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
       
        prefix: '1',
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Your Campus Email',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            pattern:{
              value: /^(?=.*[a-z])(?=.*[0-9]).{6,}$/i,
            
            message: 'At least 6 characters   One Uppercase letter'
            }
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="username"
        label="Username"
        tooltip="A Uniqle Name"
        rules={[
          {
            required: true,
            message: 'Please input your uniq username!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

    

      {/* Rest of the form items... */}


      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>


      <Form.Item {...tailFormItemLayout}>
        <Button className="registButton" type="primary" htmlType="submit">
          Sign you up!
        </Button>

        <h4>already have account! just__ 
          <button className='login'>Login<Link to={"/login"}></Link></button>
          </h4>
          
      </Form.Item>
    </Form>

      </div>
    </div>
   
  );
};

//export default SignupForm;




























// axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.withCredentials=true;

// const SignupForm = () => {
//     const [formData, setFormData] = useState({
//         username:'',
//         email:'',
//         password:'',
//         repeatPassword:'',
//     });
//     const [err,setErr] = useState('')

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const {name, value} = e.target;
//         setFormData({...formData, [name]:value});
//     };

//     const handleSubmit = async(e) => {
//         e.preventDefault()
//         //prevents the default action of the form
//         //Handle form submission. E.g., send data to backend for signup
//         // ***use axios or redux-tool
//         try{
//           const res = await axios.post('/auth/signup', input)
//           navigate('/login');
//         } catch(err){
//           console.log(err)
//           setErr(err.response.data.message)
//         }
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="username"
//               placeholder="Your Uniq NAME"
//               value={formData.username}
//               onChange={handleChange}
//               />
            
//             <input
//               type="email"
//               name="email"
//               placeholder="Your campus email"
//               value={formData.email}
//               onChange={handleChange}
//               />

//             <input
//               type="password"
//               name="password"
//               placeholder="Your Uniq PASSWORD"
//               value={formData.password}
//               onChange={handleChange}
//               />
            
//             <button type='submit'>Sign Up</button>
//             <span>already Have your Account?
//               <Link to ={'/login'}>Login in</Link>
//             </span>

//         </form>
//     );
// };

// export default SignupForm