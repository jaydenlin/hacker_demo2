import * as Yup from 'yup';
import _ from 'lodash';
const def = {
    "username": {
        initialValue: ()=> '',
        schema: ()=>{
            return Yup.string()
                .required('User name is required');
        }
    },
    "firstName": {
        initialValue: ()=> '',
        schema: ()=>{
            return Yup.string()
                .required('First name is required');
        }
    },
    "lastName": {
        initialValue: ()=> '',
        schema: null
    },
    "email": {
        initialValue: ()=> '',
        schema: ()=>{
            return Yup.string()
                .email('Invalid email address')
                .required('Email is required');
        }
    },
    "password": {
        initialValue: ()=> '',
        schema: ()=>{
            return Yup.string()
                .required('Password is required');
        }
    },
    "passwordConfirmation": {
        initialValue: ()=> '',
        schema: ()=>{
            return Yup.string()
                .required('Password Confirmation is required');
        }
    },
    "comment": {
        initialValue: ()=> '',
        schema: ()=>{
            return Yup.string()
                .required('Empty comment is invalid');
        }
    },
    "title": {
        initialValue: ()=> '',
        schema: ()=>{
            return Yup.string()
                .required('Empty title is invalid');
        }
    },
    "content": {
        initialValue: ()=> '',
        schema: ()=>{
            return Yup.string()
                .required('Empty content is invalid');
        }
    },
    "cover": {
        initialValue: ()=> null,
        schema: null
    }

}
module.exports = {
    initialValueOf: (keys, overwrittenValues={})=>{
        const valueMap = {};
        _.forEach(keys, (key)=>{
            if(def[key].initialValue) {
                valueMap[key] = overwrittenValues[key] ? overwrittenValues[key]: def[key].initialValue()
            }
        });
        return valueMap;

    },
    schemaOf: (keys)=>{
        const schemaMap = {};
        _.forEach(keys, (key)=>{
            if(def[key].schema) {
                schemaMap[key] = def[key].schema()
            }
        });
        return Yup.object(schemaMap);
    }

}