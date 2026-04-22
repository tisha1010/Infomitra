// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './NextGuide.css';

// const NextGuide = ({ user, isLoggedIn }) => {
//   const navigate = useNavigate();
//   const [process, setProcess] = useState('pan_card'); // Default process
//   const [steps, setSteps] = useState([]);
//   const [currentStep, setCurrentStep] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProcessSteps = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(`http://localhost:8000/api/processes/${process}/`, {
//           headers: isLoggedIn ? { 'Authorization': `Bearer ${localStorage.getItem('token')}` } : {},
//         });
//         const data = await response.json();
//         if (response.ok) {
//           setSteps(data.steps);
//           setProgress(((currentStep + 1) / data.steps.length) * 100);
//         } else {
//           setSteps(['Error loading steps. Please try again.']);
//         }
//       } catch (err) {
//         setSteps(['Failed to load steps. Check your connection.']);
//       }
//       setLoading(false);
//     };

//     fetchProcessSteps();
//   }, [process, currentStep, isLoggedIn]);

//   const handleContinue = () => {
//     if (currentStep < steps.length - 1) {
//       setCurrentStep(currentStep + 1);
//       setProgress(((currentStep + 2) / steps.length) * 100);
//       if (isLoggedIn) {
//         saveProgress(currentStep + 1);
//       }
//     } else {
//       alert('Guide completed!');
//       navigate('/home');
//     }
//   };

//   const saveProgress = async (step) => {
//     try {
//       await fetch('http://localhost:8000/api/progress/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//         },
//         body: JSON.stringify({ process, step }),
//       });
//     } catch (err) {
//       console.error('Progress save failed:', err);
//     }
//   };

//   const handleProcessChange = (e) => {
//     setProcess(e.target.value);
//     setCurrentStep(0);
//     setProgress(0);
//   };

//   if (loading) return <div className="guide-container">Loading...</div>;

//   return (
//     <div className="guide-container">
//       <h2>Next Guide</h2>

//       <div className="process-select">
//         <label htmlFor="process">Select Process: </label>
//         <select id="process" value={process} onChange={handleProcessChange}>
//           <option value="pan_card">PAN Card</option>
//           <option value="passport">Passport</option>
//           <option value="aadhaar">Aadhaar Card</option>
//         </select>
//       </div>

//       <div className="progress-bar">
//         <div className="progress" style={{ width: `${progress}%` }}></div>
//       </div>
//       <p>Progress: {Math.round(progress)}%</p>

//       <ol className="step-list">
//         {steps.map((step, index) => (
//           <li key={index} className={index === currentStep ? 'active' : ''}>
//             Step {index + 1}: {step}
//           </li>
//         ))}
//       </ol>

//       <button
//         className="continue-btn"
//         onClick={handleContinue}
//         disabled={currentStep >= steps.length - 1}
//       >
//         Continue
//       </button>

//       {!isLoggedIn && (
//         <p className="login-prompt">Login to save your progress.</p>
//       )}
//     </div>
//   );
// };

// export default NextGuide;


////////////////////////// Revised Code After Review
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './NextGuide.css';

// const NextGuide = ({ user, isLoggedIn }) => {
//   const navigate = useNavigate();
//   const [process, setProcess] = useState('pan_card'); 
//   const [steps, setSteps] = useState([]);
//   const [currentStep, setCurrentStep] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     const fetchSteps = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(`http://localhost:8000/api/processes/${process}/`, {
//           headers: isLoggedIn ? { 'Authorization': `Bearer ${localStorage.getItem('token')}` } : {},
//         });
//         const data = await response.json();
//         if (response.ok) {
//           setSteps(data.steps);
//           setProgress(((currentStep + 1) / data.steps.length) * 100);
//         } else {
//           setSteps(['Error loading steps. Please try again.']);
//         }
//       } catch (err) {
//         setSteps(['Failed to load steps. Check your connection.']);
//       }
//       setLoading(false);
//     };

//     fetchSteps();
//   }, [process, currentStep, isLoggedIn]); // dependencies are correct

//   const handleContinue = () => {
//     if (currentStep < steps.length - 1) {
//       const nextStep = currentStep + 1;
//       setCurrentStep(nextStep);
//       setProgress(((nextStep + 1) / steps.length) * 100);
//       if (isLoggedIn) saveProgress(nextStep + 1);
//     } else {
//       alert('Guide completed!');
//       navigate('/home');
//     }
//   };

//   const saveProgress = async (step) => {
//     try {
//       await fetch('http://localhost:8000/api/progress/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//         },
//         body: JSON.stringify({ process, step }),
//       });
//     } catch (err) {
//       console.error('Progress save failed:', err);
//     }
//   };

//   const handleProcessChange = (e) => {
//     setProcess(e.target.value);
//     setCurrentStep(0);
//     setProgress(0);
//   };

//   if (loading) return <div className="guide-container">Loading...</div>;

//   return (
//     <div className="guide-container">
//       <h2>Next Guide</h2>
//       <div className="process-select">
//         <label htmlFor="process">Select Process: </label>
//         <select id="process" value={process} onChange={handleProcessChange}>
//           <option value="pan_card">PAN Card</option>
//           <option value="passport">Passport</option>
//           <option value="aadhaar">Aadhaar Card</option>
//         </select>
//       </div>

//       <div className="progress-bar">
//         <div className="progress" style={{ width: `${progress}%` }}></div>
//       </div>
//       <p>Progress: {Math.round(progress)}%</p>

//       <ol className="step-list">
//         {steps.map((step, index) => (
//           <li key={index} className={index === currentStep ? 'active' : ''}>
//             Step {index + 1}: {step}
//           </li>
//         ))}
//       </ol>

//       <button
//         className="continue-btn"
//         onClick={handleContinue}
//         disabled={currentStep >= steps.length - 1}
//       >
//         Continue
//       </button>

//       {!isLoggedIn && <p className="login-prompt">Login to save your progress.</p>}
//     </div>
//   );
// };

// export default NextGuide;



import React, { useState } from 'react';
import {
  CheckCircle2,
  Circle,
  Clock,
  AlertCircle,
  Route,
  FileText,
  MapPin,
  CreditCard,
  // Camera
} from 'lucide-react';

// import Header from '../pages/Header';
import Footer from '../components/Footer';
import './NextStepPage.css'; // New CSS file for styling

const NextStepPage = () => {
  const [selectedProcess, setSelectedProcess] = useState('caste-certificate');

  const processes = {
    'caste-certificate': {
      title: 'Caste Certificate Application',
      description: 'Step-by-step process to obtain caste certificate',
      progress: 40,
      steps: [
        {
          id: 1,
          title: 'Document Collection',
          description: 'Gather all required documents',
          status: 'completed',
          estimatedTime: '1 day',
          icon: FileText,
          details: [
            'School leaving certificate',
            'Father/Mother caste certificate (if available)',
            'Aadhaar card',
            'Address proof',
            'Passport size photographs'
          ]
        },
        {
          id: 2,
          title: 'Form Filling',
          description: 'Complete the application form online or offline',
          status: 'current',
          estimatedTime: '30 minutes',
          icon: FileText,
          details: [
            'Visit official state portal or Tehsildar office',
            'Fill personal and family details',
            'Upload scanned documents',
            'Pay application fee (₹30-₹50)'
          ]
        },
        {
          id: 3,
          title: 'Office Visit',
          description: 'Visit Tehsildar office for verification',
          status: 'pending',
          estimatedTime: '1 day',
          icon: MapPin,
          details: [
            'Book appointment if required',
            'Carry original documents',
            'Meet with verification officer',
            'Submit biometric data if needed'
          ]
        },
        {
          id: 4,
          title: 'Verification Process',
          description: 'Field verification by revenue officials',
          status: 'pending',
          estimatedTime: '7-15 days',
          icon: Clock,
          details: [
            'Officials visit your residence',
            'Neighbor verification',
            'Document authenticity check',
            'Report submission'
          ]
        },
        {
          id: 5,
          title: 'Certificate Issuance',
          description: 'Receive your caste certificate',
          status: 'pending',
          estimatedTime: '3-7 days',
          icon: CheckCircle2,
          details: [
            'Certificate approval by competent authority',
            'Digital certificate generation',
            'SMS/Email notification',
            'Download from portal or collect from office'
          ]
        }
      ]
    },
    'pan-card': {
      title: 'PAN Card Application',
      description: 'Complete process to get new PAN card',
      progress: 0,
      steps: [
        {
          id: 1,
          title: 'Document Preparation',
          description: 'Collect identity and address proofs',
          status: 'Pending',
          estimatedTime: '30 minutes',
          icon: FileText,
          details: ['Aadhaar card', 'Address proof', 'Passport size photo']
        },
        {
          id: 2,
          title: 'Online Application',
          description: 'Fill Form 49A on NSDL/UTIITSL website',
          status: 'Pending',
          estimatedTime: '15 minutes',
          icon: FileText,
          details: ['Visit official website', 'Fill personal details', 'Upload documents']
        },
        {
          id: 3,
          title: 'Payment',
          description: 'Pay application fee online',
          status: 'Pending',
          estimatedTime: '5 minutes',
          icon: CreditCard,
          details: ['Fee: ₹93 + GST', 'Online payment', 'Save receipt']
        },
        {
          id: 4,
          title: 'Processing',
          description: 'Application under review',
          status: 'pending',
          estimatedTime: '15-20 days',
          icon: Clock,
          details: ['Document verification', 'Data processing', 'Quality check']
        },
        {
          id: 5,
          title: 'Delivery',
          description: 'PAN card dispatched to your address',
          status: 'pending',
          estimatedTime: '2-3 days',
          icon: MapPin,
          details: ['Speed post delivery', 'Track via acknowledgment number']
        }
      ]
    }
  };

  const currentProcess = processes[selectedProcess];

  const getStepIcon = (status) => {
    switch (status) {
      case 'completed':
        return CheckCircle2;
      case 'current':
        return Circle;
      case 'pending':
        return Clock;
      default:
        return Circle;
    }
  };

  const getStepColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 border-green-600 bg-green-50';
      case 'current':
        return 'text-blue-600 border-blue-600 bg-blue-50';
      case 'pending':
        return 'text-gray-600 border-gray-300 bg-gray-50';
      default:
        return 'text-gray-600 border-gray-300 bg-gray-50';
    }
  };

  // const getBadgeColor = (status) => {
  //   switch (status) {
  //     case 'completed':
  //       return 'bg-green-100 text-green-600';
  //     case 'current':
  //       return 'bg-blue-100 text-blue-600';
  //     case 'pending':
  //       return 'bg-gray-100 text-gray-600';
  //     default:
  //       return 'bg-gray-100 text-gray-600';
  //   }
  // };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* <Header /> */}
     
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Route className="w-12 h-12" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                NextStep Guide
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Get personalized step-by-step guidance for your government processes
              </p>
            </div>
          </div>
        </section>

        {/* Process Selection */}
        <section className="py-8 border-b border-gray-300">
           <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <label className="block text-sm font-medium mb-2">Select Process:</label>
              <select
                value={selectedProcess}
                onChange={(e) => setSelectedProcess(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="caste-certificate">Caste Certificate</option>
                <option value="pan-card">PAN Card Application</option>
                <option value="passport">Passport Application</option>
                <option value="driving-license">Driving License</option>
              </select>
            </div>
            </div>
          </section>

        {/* Progress Overview */}
        <section className="py-8 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">{currentProcess.title}</h2>
                  <p className="card-description">{currentProcess.description}</p>
                </div>
                <div className="card-content">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Progress</span>
                      <span className="font-medium">{currentProcess.progress}% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded">
                      <div
                        className="bg-blue-500 h-2 rounded"
                        style={{ width: `${currentProcess.progress}%` }}
                      />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <AlertCircle className="w-4 h-4 text-yellow-500" />
                      <span>
                        Estimated completion in {
                          currentProcess.steps
                            .filter(step => step.status !== 'completed')
                            .length
                        } steps
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {currentProcess.steps.map((step, index) => {
                  const StepIcon = getStepIcon(step.status);
                  const isLast = index === currentProcess.steps.length - 1;

                  return (
                    <div key={step.id} className="relative">
                      {!isLast && (
                        <div
                          className={`absolute left-6 top-12 w-0.5 h-20 ${
                            step.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'
                          }`}
                        />
                      )}
                     
                      <div className={`card border-l-4 p-6 ${
                        step.status === 'completed' ? 'border-l-green-500 bg-green-50' :
                        step.status === 'current' ? 'border-l-blue-500 bg-blue-50' :
                        'border-l-gray-300'
                      }`}>
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${
                            getStepColor(step.status)
                          }`}>
                            <StepIcon className="w-5 h-5" />
                          </div>
                         
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-lg font-semibold">{step.title}</h3>
                              <span className={`badge ${
                                step.status === 'completed' ? 'bg-green-100 text-green-600' :
                                step.status === 'current' ? 'bg-blue-100 text-blue-600' :
                                'bg-gray-100 text-gray-600'
                              }`}>
                                {step.status === 'completed' ? 'Completed' :
                                 step.status === 'current' ? 'In Progress' :
                                 'Pending'}
                              </span>
                            </div>
                           
                            <p className="text-gray-600 mb-4">{step.description}</p>
                           
                            <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>Est. {step.estimatedTime}</span>
                              </div>
                            </div>
                           
                            {step.details && (
                              <div className="bg-gray-100 rounded-lg p-4">
                                <h4 className="font-medium text-sm mb-2">What you need to do:</h4>
                                <ul className="space-y-2">
                                  {step.details.map((detail, idx) => (
                                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                                      {detail}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                           
                            {step.status === 'current' && (
                              <button className="btn btn-primary mt-4">
                                Continue with this step
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NextStepPage;