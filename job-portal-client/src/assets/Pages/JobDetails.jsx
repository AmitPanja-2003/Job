import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import PageHeader from '../../components/PageHeader';
import axios from 'axios';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(true); // Loading state to handle API call

  useEffect(() => {
    if (!id) return; // Prevent unnecessary API calls if `id` is missing

    const fetchJob = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/job/${id}`);
        setJob(response.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching job data:', error);
        setLoading(false); // Stop loading even on error
      }
    };

    fetchJob();
  }, [id]);

  const handleApply = async () => {
    const { value: url } = await Swal.fire({
      input: 'url',
      inputLabel: 'Enter Your Resume Link',
      inputPlaceholder: 'Enter the Link',
    });
    if (url) {
      Swal.fire(`Successfully Applied to Job Id: ${id}`, 'success');
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <PageHeader title={"Single Job Page"} path={'Single Job'} />

      {/* Job Details Box */}
      <div className="pt-16 pb-16 px-8 bg-white shadow-lg rounded-xl border border-gray-200">
        <h2 className="text-3xl font-bold text-blue-600">{job.jobTitle}</h2>
        <div className="flex items-center mt-4">
          <img
            src={job.companyLogo}
            alt={job.companyName}
            className="w-16 h-16 object-cover rounded-full"
          />
          <div className="ml-4">
            <p className="text-xl text-gray-900">{job.companyName}</p>
            <p className="text-sm text-gray-600">{job.jobLocation}</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-gray-800 text-lg">{job.description}</p>
        </div>

        {/* Job Details Grid */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-blue-500">Employment Type</h3>
            <p className="text-gray-600">{job.employmentType}</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-500">Experience Level</h3>
            <p className="text-gray-600">{job.experienceLevel}</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-500">Salary</h3>
            <p className="text-gray-600">{`$${job.minPrice} - $${job.maxPrice} / ${job.salaryType}`}</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-500">Posting Date</h3>
            <p className="text-gray-600">{job.postingDate}</p>
          </div>
        </div>

        {/* Apply Button */}
        <div className="flex justify-center mt-20 mb-28">
          <button
            className="bg-red-950 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            onClick={handleApply}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
