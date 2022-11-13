import React from "react";
import { NavLink } from "react-router-dom";

type JobListItemProps = {
  jobDetails: {
    address: string;
    id: string;
    name: string;
    benefits: Array<string>;
    createdAt: string;
    description: string;
    email: string;
    employment_type: Array<string>;
    location: { lat: number; long: number };
    phone: string;
    pictures: Array<string>;
    salary: string;
    title: string;
    updatedAt: string;
  };
  key: React.Key;
};

const JobListItem = (props: JobListItemProps) => {
  return (
    <li>
      <NavLink to={`/${props.jobDetails.id}`}>
        <p>{props.jobDetails.address}</p>
        <p>{props.jobDetails.benefits}</p>
        <p>{props.jobDetails.createdAt}</p>
        <p>{props.jobDetails.description}</p>
        <p>{props.jobDetails.email}</p>
        <p>{props.jobDetails.employment_type}</p>
        <p>{props.jobDetails.id}</p>
        <p>{props.jobDetails.location.lat}</p>
        <p>{props.jobDetails.location.long}</p>
        <p>{props.jobDetails.name}</p>
        <p>{props.jobDetails.phone}</p>
        <p>{props.jobDetails.pictures}</p>
        <p>{props.jobDetails.salary}</p>
        <p>{props.jobDetails.title}</p>
        <p>{props.jobDetails.updatedAt}</p>
      </NavLink>
    </li>
  );
};

export default JobListItem;
