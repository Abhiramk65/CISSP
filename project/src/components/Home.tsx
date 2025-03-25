import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ArrowLeft, CheckCircle, XCircle, Book, Brain, Target, Clock, Users, Lock, Network, Key, Bug, Code, AlertCircle } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface Domain {
  id: number;
  name: string;
  description: string;
  questions: Question[];
}

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const randomizeQuestion = (question: Question): Question => {
  // Create array of option indices
  const optionIndices = question.options.map((_, index) => index);
  // Shuffle the indices
  const shuffledIndices = shuffleArray(optionIndices);
  
  // Create new question with shuffled options
  const randomizedQuestion: Question = {
    ...question,
    options: shuffledIndices.map(index => question.options[index]),
    correctAnswer: shuffledIndices.indexOf(question.correctAnswer)
  };
  
  return randomizedQuestion;
};

interface FlashCard {
  id: number;
  front: string;
  back: string;
  category: string;
}

interface LearningMaterial {
  id: number;
  title: string;
  description: string;
  type: 'video' | 'article' | 'quiz';
  url?: string;
  icon: React.ReactNode;
}

const learningMaterials: Record<number, LearningMaterial[]> = {
  1: [
    {
      id: 1,
      title: "Risk Management Fundamentals",
      description: "Learn the core concepts of risk management in information security",
      type: "article",
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Security Governance",
      description: "Understanding security governance frameworks and principles",
      type: "video",
      icon: <Users className="w-6 h-6" />
    }
  ],
  2: [
    {
      id: 3,
      title: "Asset Classification",
      description: "Learn how to properly classify and protect information assets",
      type: "article",
      icon: <Lock className="w-6 h-6" />
    }
  ],
  // Add materials for other domains...
};

const flashCards: Record<number, FlashCard[]> = {
  1: [
    {
      id: 1,
      front: "CIA Triad",
      back: "The three fundamental information security concepts are Confidentiality, Integrity, and Availability.\n\n• Confidentiality limits access to information to authorized subjects and prevents unauthorized disclosure.\n• Integrity ensures data is accurate, complete, and protected from unauthorized modification.\n• Availability ensures authorized users have reliable and timely access to information and systems.",
      category: "Core Concepts"
    },
    {
      id: 2,
      front: "Authenticity",
      back: "Authenticity ensures that the source of a message, data, transaction, or information exchange is who (or what) it claims to be. It is verified through authentication, achieved through identity and access management (IAM) and integrity. Authenticity proves you're talking to a given person at a given point in time.",
      category: "Core Concepts"
    },
    {
      id: 3,
      front: "Nonrepudiation",
      back: "Nonrepudiation means that an action or occurrence cannot be easily denied. It is related to identification, authentication, and accountability. For example, it's difficult for a user to deny sending an email message digitally signed with their private key. Nonrepudiation proves to anyone that a given person did or said something in the past.",
      category: "Core Concepts"
    },
    {
      id: 4,
      front: "Due Care",
      back: "Due care is the conduct that a reasonable person exercises in a given situation, providing a standard for determining negligence. In information security, due care relates to steps taken to perform duties and implement security best practices. An example of due care is turning on logging.",
      category: "Legal Concepts"
    },
    {
      id: 5,
      front: "Due Diligence",
      back: "Due diligence is the prudent management and execution of due care. It involves researching and assessing current vulnerabilities to understand true risk levels. It is normally associated with leaders, laws, and regulations. An example of due diligence is reviewing logs regularly.",
      category: "Legal Concepts"
    },
    {
      id: 6,
      front: "Security Policy",
      back: "A security policy is a high-level management statement of an organization's security objectives, responsibilities, ethics, and general requirements. Policies establish governance, provide guidance and decision support, help establish legal authority, and ensure risks are kept to acceptable levels. They are written in broad terms to cover many subjects generally.",
      category: "Security Documentation"
    },
    {
      id: 7,
      front: "Security Standard",
      back: "Security standards refer to mandatory activities, actions, or rules that further define and support high-level policies. They describe specific requirements that allow meeting policy goals and are unambiguous, detailed, and measurable. Organizational security standards may specify how hardware and software products are to be used and can indicate expected user behavior.",
      category: "Security Documentation"
    },
    {
      id: 8,
      front: "Security Procedure",
      back: "Security procedures are detailed step-by-step tasks that should be performed to achieve a certain goal. The steps can apply to users, IT staff, operations staff, security members, and others who may need to carry out specific tasks, such as installing operating systems, configuring security mechanisms, or implementing access control lists.",
      category: "Security Documentation"
    },
    {
      id: 9,
      front: "Security Guideline",
      back: "Security guidelines are recommendations or best practices that are not mandatory but provide helpful guidance. A supporting guideline could further explain that audits should contain sufficient information to allow for reconciliation with prior reviews.",
      category: "Security Documentation"
    },
    {
      id: 10,
      front: "Business Continuity (BC)",
      back: "Business Continuity (BC) deals with keeping business operations running after a disaster has struck, perhaps in another location or using different tools. A BCP can include getting critical systems to another environment, getting the right people to the right places, and performing business in a different mode until regular conditions are back in place.",
      category: "Business Continuity"
    },
    {
      id: 11,
      front: "Disaster Recovery (DR)",
      back: "Disaster Recovery (DR) deals with restoring normal business operations after a disaster takes place. The DRP is a subset of the BCP and is focused on the immediate aftermath of a disaster. Disaster recovery deals with the immediate response to a disaster situation.",
      category: "Business Continuity"
    },
    {
      id: 12,
      front: "Business Impact Analysis (BIA)",
      back: "A Business Impact Analysis (BIA) identifies essential assets and describes the impact on business operations if various IT systems are lost. It helps determine the maximum tolerable downtime (MTD) for critical business functions and establish recovery targets like RTO and RPO. A BIA is performed at the beginning of business continuity planning.",
      category: "Business Continuity"
    },
    {
      id: 13,
      front: "Risk Management",
      back: "Risk Management is the process from which decisions are made to establish necessary security controls, implement them, acquire tools, and hire personnel. It involves framing risk, assessing risks (identifying assets, threats, vulnerabilities, likelihood, impact), responding to risks (mitigation, transference, acceptance, avoidance), and monitoring risks.",
      category: "Risk Management"
    },
    {
      id: 14,
      front: "Threat Modeling",
      back: "Threat modeling is a type of risk analysis used to identify exploitable security defects in the design phase of an information system or business process. Typically attack-centric, it identifies threats and their mitigations during the design phase, saving time and cost. Methodologies like STRIDE and DREAD are used.",
      category: "Risk Management"
    },
    {
      id: 15,
      front: "Supply Chain Risk Management (SCRM)",
      back: "Supply Chain Risk Management (SCRM) involves integrating security risk considerations into your third-party risk management strategy to minimize the introduction of new or unknown risks. It involves understanding your supply chain map, assessing risks associated with suppliers, and establishing minimum security requirements in contracts.",
      category: "Risk Management"
    },
    {
      id: 16,
      front: "Security Awareness Program",
      back: "A security awareness program provides basic security information and ensures everyone understands the importance of security. Key factors for success include audience consideration, relevance, engagement, and action with follow-up. It typically includes general awareness, formal training, and education aimed at influencing organizational culture.",
      category: "Security Training"
    },
    {
      id: 17,
      front: "(ISC)² Code of Professional Ethics",
      back: "The (ISC)² Code of Professional Ethics is a code of conduct or standards of ethical behavior that CISSP members must abide by. It includes principles like protecting society, acting honourably, and providing diligent and competent service. CISSP candidates must be familiar with this code.",
      category: "Professional Ethics"
    },
    {
      id: 18,
      front: "Risk",
      back: "Risk is a measure of the extent to which an entity is threatened by a potential circumstance or event, and typically a function of (1) the likelihood of an adverse event occurring; and (2) the potential impact if it does. It is the likelihood that a threat will exploit a vulnerability. Risk (Risk = Threat × Impact × Probability).",
      category: "Risk Management"
    },
    {
      id: 19,
      front: "Threat",
      back: "A threat is a potential cause of an unwanted incident, which may result in harm to a system or organization. Threat analysis involves defining the threat, identifying possible consequences, determining probable frequency and impact, and assessing the probability of materialization. Threat sources can be human or natural.",
      category: "Risk Management"
    },
    {
      id: 20,
      front: "Vulnerability",
      back: "A vulnerability is a weakness in an asset or control that can be exploited by a threat. Vulnerability assessments identify, evaluate, quantify, and prioritize these security weaknesses. Vulnerabilities can exist in information (data at rest, in transit, in use), processes, and people.",
      category: "Risk Management"
    },
    {
      id: 21,
      front: "Security Governance",
      back: "Security Governance is a framework that supports the security goals of an organization being set and expressed by senior management, communicated throughout different levels, and consistently applied and assessed. It grants power to entities needing to implement and enforce security and provides a way to verify the performance of necessary security activities.",
      category: "Security Management"
    },
    {
      id: 22,
      front: "Personally Identifiable Information (PII)",
      back: "Personally Identifiable Information (PII) is data that can be used to uniquely identify, contact, or locate a single person or can be used with other sources to uniquely identify a single individual. Organizations must have privacy policies and controls to protect employee and customer PII, documenting how it is collected, used, disclosed, archived, and destroyed.",
      category: "Privacy"
    }
  ],
  2: [
    {
      id: 3,
      front: "What is Asset Classification?",
      back: "The process of categorizing assets based on their value and sensitivity to determine appropriate security controls",
      category: "Asset Management"
    }
  ],
  // Add flash cards for other domains...
};

const domainIcons = {
  1: <Shield className="w-8 h-8" />,
  2: <Lock className="w-8 h-8" />,
  3: <Network className="w-8 h-8" />,
  4: <Network className="w-8 h-8" />,
  5: <Key className="w-8 h-8" />,
  6: <Bug className="w-8 h-8" />,
  7: <AlertCircle className="w-8 h-8" />,
  8: <Code className="w-8 h-8" />
};

const domains: Domain[] = [
  {
    id: 1,
    name: "Security and Risk Management",
    description: "Understanding and applying concepts of confidentiality, integrity, and availability, risk management, and compliance",
    questions: [
      {
        id: 1,
        question: "A security analyst discovers that a junior team member has been accessing sensitive project files that are not relevant to their current tasks, driven by curiosity. Which principle has been violated by the junior team member's actions?",
        options: [
          "Least privilege",
          "Separation of duties",
          "Need to know",
          "Due diligence"
        ],
        correctAnswer: 2,
        explanation: "The junior team member accessed files beyond what was required for their job tasks, violating the principle that access to information should be granted only if there is a legitimate business need. Least privilege would involve granting only the necessary rights and permissions initially. Separation of duties prevents a single person from controlling all aspects of a critical process. Due diligence involves taking reasonable steps to protect assets."
      },
      {
        id: 2,
        question: "During a business continuity planning exercise, the team identifies a critical business process with a Maximum Tolerable Downtime (MTD) of four hours. What should be the primary focus when developing recovery strategies for this process?",
        options: [
          "Minimising costs associated with recovery",
          "Ensuring compliance with regulatory requirements",
          "Restoring the process within the MTD",
          "Implementing the most technically advanced solution"
        ],
        correctAnswer: 2,
        explanation: "MTD defines the maximum tolerable downtime for a critical process. Recovery strategies must prioritize restoring functionality within this timeframe to avoid unacceptable consequences. Minimising costs, ensuring compliance, and using advanced technology are important but secondary to meeting the MTD."
      },
      {
        id: 3,
        question: "A company is expanding its operations to the European Union and will be processing personal data of EU citizens. Which of the following legal frameworks will have the most significant impact on their data protection practices?",
        options: [
          "The U.S. Computer Fraud and Abuse Act (CFAA)",
          "The Gramm-Leach Bliley Act (GLBA)",
          "The EU General Data Protection Regulation (GDPR)",
          "The Payment Card Industry Data Security Standard (PCI DSS)"
        ],
        correctAnswer: 2,
        explanation: "The GDPR specifically governs the processing of personal data of individuals within the EU and imposes significant obligations on organisations processing such data, regardless of their location. The other options are primarily U.S. focused or industry standards."
      },
      {
        id: 4,
        question: "Senior management has mandated a new security policy. Which of the following is the most effective way to ensure employees understand and comply with this policy?",
        options: [
          "Distributing the policy document via email",
          "Posting the policy on the company intranet",
          "Conducting mandatory security awareness training on the policy",
          "Implementing technical controls that enforce the policy"
        ],
        correctAnswer: 2,
        explanation: "Training ensures that employees are aware of the policy's requirements, understand their responsibilities, and are more likely to comply. Simply distributing or posting the policy may not ensure comprehension. Technical controls can enforce aspects but may not cover all policy requirements or address user behaviour."
      },
      {
        id: 5,
        question: "As a CISSP, you become aware that a colleague is intentionally misreporting their Continuing Professional Education (CPE) credits to maintain their certification. According to the ISC2 Code of Ethics, what is your primary responsibility?",
        options: [
          "Directly confront the colleague about the discrepancy",
          "Report the suspected violation to ISC2",
          "Discuss the matter with your supervisor and follow their guidance",
          "Ignore the situation as it is a personal matter for the colleague"
        ],
        correctAnswer: 1,
        explanation: "The ISC2 Code of Ethics mandates that CISSPs act honorably and promote the profession. Suspected violations should be reported to ISC2 for review and appropriate action. Confronting directly or discussing with a supervisor might be steps taken, but the primary ethical duty is to ISC2. Ignoring the situation would be a violation of the code."
      },
      {
        id: 6,
        question: "During a risk assessment, a threat of a severe hurricane affecting the company's coastal data center is identified. The probability of such an event occurring in any given year is assessed as low. Which risk response is most appropriate initially?",
        options: [
          "Risk avoidance by relocating the data center",
          "Risk transference by purchasing comprehensive insurance",
          "Risk acceptance due to the low probability",
          "Risk mitigation by implementing disaster recovery and business continuity plans"
        ],
        correctAnswer: 3,
        explanation: "Given the low probability but severe impact, mitigation strategies such as DR and BC plans are appropriate to prepare for potential disruptions. Risk avoidance might be too drastic for a low-probability event. Risk transference is also a valid consideration but doesn't address immediate operational resilience. Risk acceptance without any preparedness for a severe impact would be imprudent."
      },
      {
        id: 7,
        question: "A security manager is tasked with selecting a risk assessment methodology. The company has limited resources and needs a quick, high-level overview of potential risks to a specific application. Which methodology would be most suitable?",
        options: [
          "NIST SP 800-30",
          "Facilitated Risk Analysis Process (FRAP)",
          "Operationally Critical Threat, Asset, and Vulnerability Evaluation (OCTAVE)",
          "Failure Modes and Effect Analysis (FMEA)"
        ],
        correctAnswer: 1,
        explanation: "FRAP is a qualitative methodology focused on rapid assessment of specific systems or applications, making it suitable for situations with limited resources and a need for a quick overview. NIST SP 800-30 and OCTAVE are more comprehensive. FMEA focuses on potential failures in products and processes."
      },
      {
        id: 8,
        question: "Which of the following ensures that a user cannot deny having performed a specific action, such as sending an email or making a transaction?",
        options: [
          "Confidentiality",
          "Integrity",
          "Availability",
          "Nonrepudiation"
        ],
        correctAnswer: 3,
        explanation: "Nonrepudiation provides irrefutable proof that a specific action was performed by a particular user, preventing them from denying it. Confidentiality ensures secrecy, integrity ensures data accuracy, and availability ensures access."
      },
      {
        id: 9,
        question: "An organisation is developing a new software application. When should threat modeling be ideally performed to maximise its effectiveness?",
        options: [
          "After the application has been fully developed and is ready for deployment",
          "During the testing phase to identify vulnerabilities in the code",
          "During the design phase to identify potential security defects early",
          "After a security incident has occurred to understand attack vectors"
        ],
        correctAnswer: 2,
        explanation: "Addressing security concerns during the design phase is the most cost-effective and efficient way to build secure applications. Identifying threats and vulnerabilities early allows for incorporating security measures from the outset, avoiding costly rework later."
      },
      {
        id: 10,
        question: "A company wants to implement a control to ensure that no single individual can authorise and process financial transactions above a certain threshold. This is an example of which security principle?",
        options: [
          "Least privilege",
          "Need to know",
          "Separation of duties",
          "Defence in depth"
        ],
        correctAnswer: 2,
        explanation: "Separation of duties ensures that critical tasks require more than one individual to complete, reducing the risk of fraud or error by preventing any single person from having excessive control. Least privilege grants only necessary permissions. Need to know limits information access. Defence in depth uses multiple layers of security."
      },
      {
        id: 11,
        question: "Which of the following is the primary goal of security governance within an organisation?",
        options: [
          "Implementing the latest security technologies",
          "Ensuring compliance with all industry standards",
          "Directing and controlling security efforts to support business goals",
          "Minimising the number of security incidents"
        ],
        correctAnswer: 2,
        explanation: "Security governance aims to align security strategies and practices with the overall objectives of the organisation, ensuring that security efforts contribute to business success."
      },
      {
        id: 12,
        question: "A new regulation requires the organisation to implement specific data encryption standards. This is an example of which type of security policy driver?",
        options: [
          "Advisory",
          "Internal",
          "Regulatory",
          "Organisational"
        ],
        correctAnswer: 2,
        explanation: "Regulations are mandatory policies imposed by external legal or governmental bodies. Advisory policies are recommendations. Internal policies originate within the organisation for its own operational needs. Organisational is a broader term that can encompass regulatory drivers but isn't specific to external mandates."
      },
      {
        id: 13,
        question: "During an incident response process, the first step after detecting a potential security breach should be to:",
        options: [
          "Eradicate the threat from all affected systems",
          "Notify law enforcement agencies",
          "Contain the incident to prevent further damage",
          "Restore affected systems to normal operation"
        ],
        correctAnswer: 2,
        explanation: "Containment is crucial in the initial response to limit the scope and impact of a security incident. Eradication and restoration follow containment. Notification to law enforcement depends on the nature and severity of the incident and organisational policy."
      },
      {
        id: 14,
        question: "Which of the following is a key element of due diligence in information security?",
        options: [
          "Implementing security controls based on best practices",
          "Regularly reviewing and updating security policies",
          "Ensuring employees receive security awareness training",
          "Actively monitoring and testing the effectiveness of implemented controls"
        ],
        correctAnswer: 3,
        explanation: "Due diligence involves ongoing vigilance and verification that implemented controls are functioning as intended and effectively mitigating risks. Implementing controls, reviewing policies, and training employees are aspects of due care."
      },
      {
        id: 15,
        question: "A company is considering outsourcing a critical IT function to a third-party vendor. What is the most important aspect of supply chain risk management to address before finalising the contract?",
        options: [
          "The vendor's financial stability",
          "The vendor's physical security controls",
          "Clearly defined security requirements and responsibilities in the contract",
          "The vendor's employee background check procedures"
        ],
        correctAnswer: 2,
        explanation: "The contract should explicitly outline the security expectations, standards, and obligations of both the company and the vendor, as well as mechanisms for verification and consequences of non-compliance."
      },
      {
        id: 16,
        question: "Which security concept ensures that information is accessible and usable upon demand by authorised users?",
        options: [
          "Confidentiality",
          "Integrity",
          "Availability",
          "Authenticity"
        ],
        correctAnswer: 2,
        explanation: "Availability ensures that authorised users can access information and resources when they need them. Confidentiality protects against unauthorised disclosure, integrity ensures data accuracy, and authenticity verifies the source."
      },
      {
        id: 17,
        question: "An organisation needs to classify its data based on sensitivity. Which of the following factors should be given the highest priority when determining the classification level?",
        options: [
          "The age of the data",
          "The location where the data is stored",
          "The potential impact of unauthorised disclosure",
          "The cost associated with protecting the data"
        ],
        correctAnswer: 2,
        explanation: "Data classification primarily focuses on the sensitivity of the information and the potential harm that could result from its unauthorised disclosure, which dictates the level of protection required."
      },
      {
        id: 18,
        question: "Which of the following is a proactive approach to risk management?",
        options: [
          "Responding to security incidents as they occur",
          "Implementing security controls to prevent potential threats",
          "Analysing the impact of past security breaches",
          "Reviewing security policies after a regulatory change"
        ],
        correctAnswer: 1,
        explanation: "A proactive approach involves taking preventive measures to reduce the likelihood and impact of threats before they occur. Responding to incidents and analysing past breaches are reactive. Reviewing policies after changes is a necessary update but not necessarily proactive threat prevention."
      },
      {
        id: 19,
        question: "A security team is developing a Business Impact Analysis (BIA). What is the primary objective of identifying critical business functions during this process?",
        options: [
          "To document all IT assets used by the organisation",
          "To determine the financial losses resulting from past incidents",
          "To prioritise functions based on their impact on organisational viability",
          "To identify all potential threats to the organisation's operations"
        ],
        correctAnswer: 2,
        explanation: "The BIA aims to identify and prioritise critical business functions based on their importance to the organisation's survival and the potential consequences of their disruption."
      },
      {
        id: 20,
        question: "Which of the following describes a situation where an ethical disclosure of a vulnerability would be necessary?",
        options: [
          "Discovering a misconfiguration on the company's internal server",
          "Identifying a zero-day vulnerability in a widely used software product",
          "Observing a colleague violating company policy",
          "Finding outdated security software on a personal device connected to the network"
        ],
        correctAnswer: 1,
        explanation: "Ethical disclosure involves responsibly informing the vendor and potentially the public about previously unknown vulnerabilities that could be exploited."
      },
      {
        id: 21,
        question: "A security manager is implementing a security awareness program and wants to use a method that simulates real-world attacks to identify areas needing improvement. Which technique would be most effective?",
        options: [
          "Distributing security posters with awareness tips",
          "Conducting periodic quizzes on security policies",
          "Running simulated phishing campaigns",
          "Organising workshops on password security"
        ],
        correctAnswer: 2,
        explanation: "Phishing simulations test users' ability to identify and respond to social engineering attacks, providing valuable data on areas where awareness needs improvement."
      },
      {
        id: 22,
        question: "Which of the following is a key principle of the 'zero trust' security model?",
        options: [
          "Granting implicit trust to users within the corporate network",
          "Relying primarily on perimeter security controls",
          "Verifying every user and device before granting access",
          "Assuming all systems are inherently secure"
        ],
        correctAnswer: 2,
        explanation: "Zero trust operates on the principle of 'never trust, always verify,' requiring strict authentication and authorisation for every access request, regardless of location."
      },
      {
        id: 23,
        question: "An organisation is required to comply with multiple international privacy laws. Which of the following principles is generally consistent across most of these regulations?",
        options: [
          "Mandatory data localisation within the country of origin",
          "Strict limits on the duration of data retention",
          "The right of individuals to access and control their personal data",
          "Standardised data encryption algorithms"
        ],
        correctAnswer: 2,
        explanation: "Most international privacy laws grant individuals certain rights over their personal data, including the right to access, rectify, and in some cases, erase their information."
      },
      {
        id: 24,
        question: "Which of the following frameworks provides a comprehensive set of controls and best practices for information security management systems?",
        options: [
          "NIST Cybersecurity Framework",
          "COBIT",
          "ISO/IEC 27001",
          "ITIL"
        ],
        correctAnswer: 2,
        explanation: "ISO/IEC 27001 is an international standard that specifies the requirements for establishing, implementing, maintaining, and continually improving an information security management system (ISMS)."
      },
      {
        id: 25,
        question: "During a risk assessment, the likelihood of a threat exploiting a vulnerability is assessed as high, but the potential business impact is low. How should this risk be prioritised relative to a risk with low likelihood but high impact?",
        options: [
          "The high likelihood, low impact risk should always be prioritised higher",
          "The low likelihood, high impact risk should always be prioritised higher",
          "Both risks should be carefully evaluated based on the organisation's risk appetite",
          "Neither risk requires immediate attention due to the low or manageable impact"
        ],
        correctAnswer: 2,
        explanation: "Risk prioritisation should consider both likelihood and impact, as well as the organisation's tolerance for different types and levels of risk. A low likelihood, high impact event could still be critical due to its potential severity."
      },
      {
        id: 26,
        question: "Which of the following roles typically holds the ultimate responsibility for the security of an organisation's information assets?",
        options: [
          "The Chief Information Security Officer (CISO)",
          "The IT Manager",
          "Senior Management/Executive Leadership",
          "The Security Analyst"
        ],
        correctAnswer: 2,
        explanation: "While the CISO and security team are responsible for implementing and managing security, the ultimate accountability for organisational security rests with senior management."
      },
      {
        id: 27,
        question: "Which of the following is a detective security control?",
        options: [
          "Implementing strong password policies",
          "Installing firewall rules to block malicious traffic",
          "Monitoring system logs for suspicious activity",
          "Using multi-factor authentication"
        ],
        correctAnswer: 2,
        explanation: "Detective controls aim to identify and alert on security events that have already occurred. Monitoring logs helps detect suspicious or malicious actions. Preventive controls aim to prevent incidents from happening."
      },
      {
        id: 28,
        question: "An organisation needs to ensure the integrity of its sensitive data stored in a database. Which security concept is most directly relevant?",
        options: [
          "Confidentiality controls",
          "Access control mechanisms",
          "Hashing algorithms",
          "Encryption techniques"
        ],
        correctAnswer: 2,
        explanation: "Hashing algorithms create a unique, fixed-size digest of data. Any modification to the data will result in a different hash value, allowing for verification of integrity. Confidentiality relies on encryption, access controls regulate who can access data."
      },
      {
        id: 29,
        question: "Which of the following is a critical step in developing a security policy?",
        options: [
          "Selecting specific security products",
          "Defining clear and enforceable rules",
          "Determining the technical implementation details",
          "Assigning individual users to specific access groups"
        ],
        correctAnswer: 1,
        explanation: "Effective security policies must have clearly defined rules that are specific, unambiguous, and capable of being enforced."
      },
      {
        id: 30,
        question: "A company is implementing a cloud-based service. According to the shared responsibility model, which security responsibilities typically remain with the company (the customer)?",
        options: [
          "Securing the physical infrastructure of the cloud provider",
          "Managing the network controls of the cloud environment",
          "Protecting the data and applications stored in the cloud",
          "Ensuring the hypervisor security of the cloud platform"
        ],
        correctAnswer: 2,
        explanation: "In the shared responsibility model, the cloud provider typically secures the infrastructure 'up to the hypervisor,' while the customer retains responsibility for the security of their data, applications, and configurations within the cloud environment."
      },
      {
        id: 31,
        question: "Which of the following is the primary purpose of a Computer Security Incident Response Team (CSIRT)?",
        options: [
          "To prevent all security incidents from occurring",
          "To investigate and respond to security incidents effectively",
          "To develop and implement security policies",
          "To conduct regular security awareness training"
        ],
        correctAnswer: 1,
        explanation: "The primary function of a CSIRT is to manage the incident response lifecycle, including detection, analysis, containment, eradication, recovery, and post-incident activities."
      },
      {
        id: 32,
        question: "Which of the following best describes 'defence in depth'?",
        options: [
          "Implementing a single, strong security control",
          "Relying solely on perimeter security",
          "Using multiple, layered security controls",
          "Automating all security processes"
        ],
        correctAnswer: 2,
        explanation: "Defence in depth involves implementing a layered security approach with diverse controls to increase resilience and reduce the likelihood of a single point of failure."
      },
      {
        id: 33,
        question: "An organisation wants to ensure business continuity in the event of a prolonged power outage. Which of the following is a critical component of their plan?",
        options: [
          "Implementing strong authentication mechanisms",
          "Regularly patching all critical systems",
          "Having a reliable backup power source",
          "Conducting frequent vulnerability assessments"
        ],
        correctAnswer: 2,
        explanation: "A backup power source (such as a generator or UPS) is critical for maintaining operations during a power outage, supporting business continuity."
      },
      {
        id: 34,
        question: "Which of the following legal concepts refers to the obligation to act as a reasonably prudent person would under similar circumstances?",
        options: [
          "Due diligence",
          "Due care",
          "Liability",
          "Negligence"
        ],
        correctAnswer: 1,
        explanation: "Due care refers to the standard of conduct expected of a reasonably prudent person under similar circumstances. Due diligence involves the investigation and assessment needed before taking action."
      },
      {
        id: 35,
        question: "During a threat modeling exercise for a web application, the team identifies a risk of cross-site scripting (XSS) attacks. This is primarily a threat to which security principle?",
        options: [
          "Availability",
          "Integrity",
          "Confidentiality",
          "Nonrepudiation"
        ],
        correctAnswer: 2,
        explanation: "While XSS can impact integrity and availability, its primary threat is often the ability for attackers to inject malicious scripts that can steal sensitive information like session cookies or user credentials, thus compromising confidentiality."
      },
      {
        id: 36,
        question: "Which of the following is a key benefit of participating in information security professional organisations like ISC2?",
        options: [
          "Guaranteed employment in the cybersecurity field",
          "Access to a wide network of security professionals and resources",
          "Exemption from mandatory security awareness training",
          "Exclusive rights to develop security standards"
        ],
        correctAnswer: 1,
        explanation: "Professional organisations provide networking opportunities, access to knowledge bases, best practices, and contribute to professional development."
      },
      {
        id: 37,
        question: "A company is implementing a Bring Your Own Device (BYOD) policy. Which of the following is a key security consideration?",
        options: [
          "Mandating the use of specific hardware vendors",
          "Prohibiting personal use of devices for work",
          "Implementing mobile device management (MDM) solutions",
          "Requiring all devices to be physically located within the office premises"
        ],
        correctAnswer: 2,
        explanation: "MDM solutions help enforce security policies on personal devices accessing corporate resources, addressing risks associated with BYOD."
      },
      {
        id: 38,
        question: "Which of the following is a primary goal of physical security controls?",
        options: [
          "Preventing unauthorised logical access to systems",
          "Ensuring the availability of network bandwidth",
          "Protecting personnel, assets, and facilities from physical threats",
          "Detecting and responding to cyberattacks"
        ],
        correctAnswer: 2,
        explanation: "Physical security controls are designed to prevent unauthorised physical access, damage, or theft."
      },
      {
        id: 39,
        question: "An organisation is developing a data retention policy. Which of the following should be a key factor in determining the retention period for specific data types?",
        options: [
          "The cost of storage",
          "The ease of data retrieval",
          "Legal and regulatory requirements",
          "The frequency with which the data is accessed"
        ],
        correctAnswer: 2,
        explanation: "Data retention policies are often driven by legal and regulatory obligations that specify how long certain types of data must be kept."
      },
      {
        id: 40,
        question: "Which of the following is a primary objective of security investigations?",
        options: [
          "To implement new security controls",
          "To identify the root cause and responsible parties of security incidents",
          "To conduct regular security audits",
          "To provide training to employees on incident reporting"
        ],
        correctAnswer: 1,
        explanation: "Security investigations aim to understand the details of security incidents to inform response, remediation, and future prevention efforts."
      },
      {
        id: 41,
        question: "Which of the following is a key aspect of personnel security policies and procedures related to onboarding new employees?",
        options: [
          "Regularly monitoring their network activity",
          "Immediately granting them access to all systems",
          "Conducting thorough background checks",
          "Restricting their internet access"
        ],
        correctAnswer: 2,
        explanation: "Background checks help assess the trustworthiness of new hires and mitigate potential insider threats."
      },
      {
        id: 42,
        question: "Which of the following is a primary benefit of establishing and maintaining a security awareness, education, and training program?",
        options: [
          "Eliminating all insider threats",
          "Reducing the likelihood of human error leading to security incidents",
          "Fully automating the organisation's security posture",
          "Ensuring all employees obtain security certifications"
        ],
        correctAnswer: 1,
        explanation: "Awareness programs educate users about security risks and best practices, making them less likely to fall victim to attacks or make security mistakes."
      },
      {
        id: 43,
        question: "A company is implementing a new access control model where access is granted based on predefined roles associated with job functions. Which model is being implemented?",
        options: [
          "Discretionary Access Control (DAC)",
          "Mandatory Access Control (MAC)",
          "Role-Based Access Control (RBAC)",
          "Attribute-Based Access Control (ABAC)"
        ],
        correctAnswer: 2,
        explanation: "RBAC grants access based on a user's assigned roles within the organisation, simplifying access management."
      },
      {
        id: 44,
        question: "Which of the following is a key principle to consider when designing secure facilities?",
        options: [
          "Maximising accessibility for all employees at all times",
          "Implementing security controls only at the perimeter",
          "Applying the principle of 'least privilege' to physical access",
          "Relying solely on security guards for access control"
        ],
        correctAnswer: 2,
        explanation: "Physical least privilege means granting access only to the areas required for an individual to perform their job duties."
      },
      {
        id: 45,
        question: "Which of the following is a primary purpose of establishing Service Level Agreements (SLAs) with third-party vendors?",
        options: [
          "To ensure the lowest possible cost for services",
          "To guarantee a specific level of performance and security",
          "To transfer all security responsibilities to the vendor",
          "To limit the vendor's liability in case of a security breach"
        ],
        correctAnswer: 1,
        explanation: "SLAs define the expected service levels, including security standards, that the vendor must meet."
      },
      {
        id: 46,
        question: "During a risk treatment process, senior management decides to not implement a recommended control due to the high cost, acknowledging the potential risk. This is an example of:",
        options: [
          "Risk avoidance",
          "Risk mitigation",
          "Risk transference",
          "Risk acceptance"
        ],
        correctAnswer: 3,
        explanation: "Risk acceptance involves acknowledging a potential risk and consciously deciding to take no action to mitigate it, often due to cost or other considerations."
      },
      {
        id: 47,
        question: "Which of the following is a primary objective of threat intelligence?",
        options: [
          "To implement preventative security controls",
          "To understand the capabilities and motivations of potential adversaries",
          "To respond to active security incidents",
          "To conduct forensic analysis after a breach"
        ],
        correctAnswer: 1,
        explanation: "Threat intelligence provides insights into who the attackers are, how they operate, and what their goals might be."
      },
      {
        id: 48,
        question: "Which of the following is a key element of an effective patch management process?",
        options: [
          "Immediately deploying all vendor-released patches to production systems",
          "Thoroughly testing patches in a non-production environment before deployment",
          "Allowing individual users to manage software updates on their workstations",
          "Only applying security patches during scheduled maintenance windows, regardless of severity"
        ],
        correctAnswer: 1,
        explanation: "Testing ensures that patches do not introduce instability or compatibility issues into production systems."
      },
      {
        id: 49,
        question: "Which of the following is a key principle of data security?",
        options: [
          "Ensuring all data is publicly accessible to promote transparency",
          "Protecting data throughout its lifecycle",
          "Storing all data in a single, centralised location",
          "Limiting data collection to only essential information, regardless of future needs"
        ],
        correctAnswer: 1,
        explanation: "Data security encompasses all stages from creation to disposal, requiring appropriate controls at each phase."
      },
      {
        id: 50,
        question: "A security manager is developing a business continuity plan and needs to determine the Recovery Point Objective (RPO) for a critical database. The RPO should reflect:",
        options: [
          "The maximum amount of data loss that is acceptable",
          "The time it takes to restore the database to full operation",
          "The cost associated with backing up the database",
          "The location where the database backups are stored"
        ],
        correctAnswer: 0,
        explanation: "RPO defines the point in time to which data must be recovered after a disruption, effectively determining the acceptable data loss window."
      }
    ]
  },
  {
    id: 2,
    name: "Asset Security",
    description: "Identifying and classifying information and assets, determining and maintaining appropriate security controls",
    questions: []
  },
  {
    id: 3,
    name: "Security Architecture and Engineering",
    description: "Implementing and managing engineering processes using secure design principles",
    questions: []
  },
  {
    id: 4,
    name: "Communication and Network Security",
    description: "Designing and protecting network security architecture and components",
    questions: []
  },
  {
    id: 5,
    name: "Identity and Access Management",
    description: "Controlling physical and logical access to assets, information, and systems",
    questions: []
  },
  {
    id: 6,
    name: "Security Assessment and Testing",
    description: "Designing, performing, and analyzing security testing",
    questions: []
  },
  {
    id: 7,
    name: "Security Operations",
    description: "Conducting investigations and implementing preventative measures",
    questions: []
  },
  {
    id: 8,
    name: "Software Development Security",
    description: "Understanding, applying, and enforcing software security",
    questions: []
  }
];

const Home: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [randomizedQuestions, setRandomizedQuestions] = useState<Question[]>([]);
  const [activeTab, setActiveTab] = useState<'practice' | 'learn' | 'flashcards'>('practice');
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const handleDomainSelect = (domain: Domain) => {
    setSelectedDomain(domain);
    setCurrentQuestion(0);
    setShowExplanation(false);
    setSelectedAnswer(null);
    setScore(0);
    
    // Only randomize questions if the domain has questions
    if (domain.questions && domain.questions.length > 0) {
      const shuffledQuestions = shuffleArray(domain.questions).map(randomizeQuestion);
      setRandomizedQuestions(shuffledQuestions);
    } else {
      setRandomizedQuestions([]);
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (!randomizedQuestions.length) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    if (answerIndex === randomizedQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (randomizedQuestions.length && currentQuestion < randomizedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
      setSelectedAnswer(null);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const renderDomainOverview = () => (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {domains.map((domain) => (
          <motion.div
            key={domain.id}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => handleDomainSelect(domain)}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 text-white">
                {domainIcons[domain.id as keyof typeof domainIcons]}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Domain {domain.id}
                </h2>
                <p className="text-sm text-gray-500">
                  {domain.questions.length} questions
                </p>
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {domain.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {domain.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <Book className="w-4 h-4 mr-1" />
                {learningMaterials[domain.id]?.length || 0} learning materials
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Brain className="w-4 h-4 mr-1" />
                {flashCards[domain.id]?.length || 0} flash cards
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderLearningMaterials = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Materials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {selectedDomain && learningMaterials[selectedDomain.id]?.map((material) => (
          <motion.div
            key={material.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 text-blue-600">
                {material.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {material.title}
              </h3>
            </div>
            <p className="text-gray-600 mb-4">{material.description}</p>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              {material.type === 'video' ? '15 min' : '10 min'} read
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderFlashCards = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Flash Cards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {selectedDomain && flashCards[selectedDomain.id]?.map((card) => (
          <motion.div
            key={card.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative h-64 cursor-pointer perspective-1000"
            onClick={() => setFlippedCard(flippedCard === card.id ? null : card.id)}
          >
            <div 
              className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                flippedCard === card.id ? 'rotate-y-180' : ''
              }`}
            >
              {/* Front of card */}
              <div className="absolute inset-0 backface-hidden bg-white rounded-xl shadow-lg p-6 flex items-center justify-center text-center border-2 border-blue-100 overflow-hidden">
                <div className="w-full">
                  <p className="text-lg font-medium text-gray-900 mb-2 break-words">{card.front}</p>
                  <span className="text-sm text-blue-600 font-medium">{card.category}</span>
                </div>
              </div>
              
              {/* Back of card */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-6 flex items-center justify-center text-center border-2 border-blue-200 overflow-y-auto">
                <div className="w-full">
                  <div className="prose prose-sm max-w-none">
                    <p className="text-base text-gray-700 whitespace-pre-line break-words">{card.back}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-center text-sm text-blue-600">
                    <span className="mr-1">Click to flip back</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold text-center text-gray-900 mb-8 flex items-center justify-center"
        >
          <Shield className="w-8 h-8 mr-3 text-blue-600" />
          CISSP Practice Questions
        </motion.h1>
        
        {!selectedDomain ? (
          renderDomainOverview()
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <button
                  onClick={() => setSelectedDomain(null)}
                  className="text-gray-600 hover:text-gray-900 mr-4 flex items-center"
                >
                  <ArrowLeft className="w-5 h-5 mr-1" />
                  Back to Domains
                </button>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 text-white">
                    {domainIcons[selectedDomain.id as keyof typeof domainIcons]}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {selectedDomain.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Domain {selectedDomain.id}
                    </p>
                  </div>
                </div>
              </div>
              {randomizedQuestions.length > 0 && (
                <div className="text-sm text-gray-500">
                  Score: {score}/{currentQuestion + 1}
                </div>
              )}
            </div>

            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => setActiveTab('practice')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'practice'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Practice Questions
              </button>
              <button
                onClick={() => setActiveTab('learn')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'learn'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Learning Materials
              </button>
              <button
                onClick={() => setActiveTab('flashcards')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'flashcards'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Flash Cards
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'practice' && randomizedQuestions.length > 0 ? (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-gray-600">
                        Question {currentQuestion + 1} of {randomizedQuestions.length}
                      </p>
                      <div className="w-32 h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-full bg-blue-600 rounded-full transition-all duration-300"
                          style={{ width: `${((currentQuestion + 1) / randomizedQuestions.length) * 100}%` }}
                        />
                      </div>
                    </div>
                    <p className="text-xl font-medium text-gray-900 mb-4">
                      {randomizedQuestions[currentQuestion].question}
                    </p>
                    <div className="space-y-3">
                      {randomizedQuestions[currentQuestion].options.map(
                        (option, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleAnswerSelect(index)}
                            className={`w-full text-left p-3 rounded-lg border transition-all duration-200 ${
                              selectedAnswer === index
                                ? showExplanation
                                  ? index === randomizedQuestions[currentQuestion].correctAnswer
                                    ? "bg-green-100 border-green-500"
                                    : "bg-red-100 border-red-500"
                                  : "bg-blue-100 border-blue-500"
                                : "border-gray-300 hover:border-gray-400"
                            }`}
                            disabled={showExplanation}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center">
                              {showExplanation && selectedAnswer === index && (
                                <span className="mr-2">
                                  {index === randomizedQuestions[currentQuestion].correctAnswer ? (
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                  ) : (
                                    <XCircle className="w-5 h-5 text-red-500" />
                                  )}
                                </span>
                              )}
                              {option}
                            </div>
                          </motion.button>
                        )
                      )}
                    </div>
                  </div>

                  {showExplanation && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Explanation
                      </h3>
                      <p className="text-gray-700">
                        {randomizedQuestions[currentQuestion].explanation}
                      </p>
                    </motion.div>
                  )}

                  {showExplanation && currentQuestion < randomizedQuestions.length - 1 && (
                    <motion.button
                      onClick={nextQuestion}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Next Question
                    </motion.button>
                  )}
                </motion.div>
              ) : activeTab === 'practice' ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <Shield className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Questions Coming Soon
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    We're currently preparing questions for {selectedDomain.name}. 
                    Please check back later or try another domain.
                  </p>
                </motion.div>
              ) : activeTab === 'learn' ? (
                renderLearningMaterials()
              ) : (
                renderFlashCards()
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Home; 