import { url } from "../BaseURL";
import axiosApiInstance from "../Interceptor";

const outGetRegRegbasic = async (data) => {
  return await axiosApiInstance.post(`${url}api/his7/reg/websrv/outGetRegRegbasic`, data)
}

const outGetWebList = async (data) => {
  return await axiosApiInstance.post(`${url}api/his7/reg/websrv/outGetWebList`, data)
}

const outGetWebSchebasic = async (data) => {
  return await axiosApiInstance.post(`${url}api/his7/reg/websrv/outGetWebSchebasic`, data)
}

const outCheckFvRv = async (data) => {
  return await axiosApiInstance.post(`${url}api/his7/reg/websrv/outCheckFvRv` , data)
} 

const outGetRegOpdSeqNo = async (data) => {
  return await axiosApiInstance.post(`${url}api/his7/reg/websrv/outGetRegOpdSeqNo` , data)
} 

const outCnclRegRegbasic = async (data) => {
  return await axiosApiInstance.post(`${url}api/his7/reg/websrv/outCnclRegRegbasic` , data)
} 


const outSetRegWebChrbas = async (data) => {
  return await axiosApiInstance.post(`${url}api/his7/reg/websrv/outSetRegWebChrbas` , data)
} 
const outGetDeptBasic = async (data) => {
  return await axiosApiInstance.post(`${url}api/his7/reg/websrv/outGetDeptBasic` , data)
}




const outGetDeptBasic = async (data) => {
  return await axiosApiInstance.post(`${url}api/his7/reg/websrv/outGetDeptBasic` , data)
} 


export const _services = {
  outGetDeptBasic,
  outSetRegWebChrbas,
  outGetRegRegbasic ,
  outGetWebList,
  outGetWebSchebasic,
  outCheckFvRv,
  outGetRegOpdSeqNo,
  outCnclRegRegbasic
};
