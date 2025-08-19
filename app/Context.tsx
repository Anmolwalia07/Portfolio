"use client";
import axios from "axios";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface Technology {
  _id: string;
  name: string;
  projectId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Project {
  _id: string;
  title: string;
  imageUrl: string;
  description: string;
  technologies: Technology[];
  liveLink: string;
  gitHubLink: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Skill{
    _id: string;
    name:string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  skills: Skill[];
  projects: Project[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface UserContextType {
  user: User|undefined;
  setUser: React.Dispatch<React.SetStateAction<User|undefined>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User|undefined>(undefined);
   useEffect(() => {
   axios.get('/api/user').then((res)=>{
    setUser(res.data.users);
   }).catch(err=>{
    console.log(err)
   })

  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUserContext must be used within UserProvider");
  return context;
};
