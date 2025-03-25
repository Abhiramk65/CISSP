export const questions = [
  {
    question: "A security analyst discovers that a junior team member has been accessing sensitive project files that are not relevant to their current tasks, driven by curiosity. Which principle has been violated?",
    options: [
      "Least privilege",
      "Separation of duties",
      "Need to know",
      "Due diligence"
    ],
    correctAnswer: "Need to know",
    explanation: "The junior team member accessed files beyond what was required for their job tasks, violating the principle that access to information should be granted only if there is a legitimate business need."
  },
  {
    question: "During a business continuity planning exercise, the team identifies a critical business process with a Maximum Tolerable Downtime (MTD) of four hours. What should be the primary focus when developing recovery strategies for this process?",
    options: [
      "Minimising costs associated with recovery",
      "Ensuring compliance with regulatory requirements",
      "Restoring the process within the MTD",
      "Implementing the most technically advanced solution"
    ],
    correctAnswer: "Restoring the process within the MTD",
    explanation: "MTD defines the maximum tolerable downtime for a critical process. Recovery strategies must prioritize restoring functionality within this timeframe to avoid unacceptable consequences."
  },
  {
    question: "A company is expanding its operations to the European Union and will be processing personal data of EU citizens. Which of the following legal frameworks will have the most significant impact on their data protection practices?",
    options: [
      "The U.S. Computer Fraud and Abuse Act (CFAA)",
      "The Gramm-Leach Bliley Act (GLBA)",
      "The EU General Data Protection Regulation (GDPR)",
      "The Payment Card Industry Data Security Standard (PCI DSS)"
    ],
    correctAnswer: "The EU General Data Protection Regulation (GDPR)",
    explanation: "The GDPR specifically governs the processing of personal data of individuals within the EU and imposes significant obligations on organisations processing such data, regardless of their location."
  },
  {
    question: "Senior management has mandated a new security policy. Which of the following is the most effective way to ensure employees understand and comply with this policy?",
    options: [
      "Distributing the policy document via email",
      "Posting the policy on the company intranet",
      "Conducting mandatory security awareness training on the policy",
      "Implementing technical controls that enforce the policy"
    ],
    correctAnswer: "Conducting mandatory security awareness training on the policy",
    explanation: "Training ensures that employees are aware of the policy's requirements, understand their responsibilities, and are more likely to comply."
  },
  {
    question: "As a CISSP, you become aware that a colleague is intentionally misreporting their Continuing Professional Education (CPE) credits to maintain their certification. According to the ISC2 Code of Ethics, what is your primary responsibility?",
    options: [
      "Directly confront the colleague about the discrepancy",
      "Report the suspected violation to ISC2",
      "Discuss the matter with your supervisor and follow their guidance",
      "Ignore the situation as it is a personal matter for the colleague"
    ],
    correctAnswer: "Report the suspected violation to ISC2",
    explanation: "The ISC2 Code of Ethics mandates that CISSPs act honorably and promote the profession. Suspected violations should be reported to ISC2 for review and appropriate action."
  },
  {
    question: "During a risk assessment, a threat of a severe hurricane affecting the company's coastal data center is identified. The probability of such an event occurring in any given year is assessed as low. Which risk response is most appropriate initially?",
    options: [
      "Risk avoidance by relocating the data center",
      "Risk transference by purchasing comprehensive insurance",
      "Risk acceptance due to the low probability",
      "Risk mitigation by implementing disaster recovery and business continuity plans"
    ],
    correctAnswer: "Risk mitigation by implementing disaster recovery and business continuity plans",
    explanation: "Given the low probability but severe impact, mitigation strategies such as DR and BC plans are appropriate to prepare for potential disruptions."
  },
  {
    question: "A security manager is tasked with selecting a risk assessment methodology. The company has limited resources and needs a quick, high-level overview of potential risks to a specific application. Which methodology would be most suitable?",
    options: [
      "NIST SP 800-30",
      "Facilitated Risk Analysis Process (FRAP)",
      "Operationally Critical Threat, Asset, and Vulnerability Evaluation (OCTAVE)",
      "Failure Modes and Effect Analysis (FMEA)"
    ],
    correctAnswer: "Facilitated Risk Analysis Process (FRAP)",
    explanation: "FRAP is a qualitative methodology focused on rapid assessment of specific systems or applications, making it suitable for situations with limited resources and a need for a quick overview."
  },
  {
    question: "Which of the following ensures that a user cannot deny having performed a specific action, such as sending an email or making a transaction?",
    options: [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Nonrepudiation"
    ],
    correctAnswer: "Nonrepudiation",
    explanation: "Nonrepudiation provides irrefutable proof that a specific action was performed by a particular user, preventing them from denying it."
  },
  {
    question: "An organisation is developing a new software application. When should threat modeling be ideally performed to maximise its effectiveness?",
    options: [
      "After the application has been fully developed and is ready for deployment",
      "During the testing phase to identify vulnerabilities in the code",
      "During the design phase to identify potential security defects early",
      "After a security incident has occurred to understand attack vectors"
    ],
    correctAnswer: "During the design phase to identify potential security defects early",
    explanation: "Addressing security concerns during the design phase is the most cost-effective and efficient way to build secure applications."
  },
  {
    question: "A company wants to implement a control to ensure that no single individual can authorise and process financial transactions above a certain threshold. This is an example of which security principle?",
    options: [
      "Least privilege",
      "Need to know",
      "Separation of duties",
      "Defence in depth"
    ],
    correctAnswer: "Separation of duties",
    explanation: "Separation of duties ensures that critical tasks require more than one individual to complete, reducing the risk of fraud or error."
  },
  {
    question: "Which of the following is the primary goal of security governance within an organisation?",
    options: [
      "Implementing the latest security technologies",
      "Ensuring compliance with all industry standards",
      "Directing and controlling security efforts to support business goals",
      "Minimising the number of security incidents"
    ],
    correctAnswer: "Directing and controlling security efforts to support business goals",
    explanation: "Security governance aims to align security strategies and practices with the overall objectives of the organisation, ensuring that security efforts contribute to business success."
  },
  {
    question: "A new regulation requires the organisation to implement specific data encryption standards. This is an example of which type of security policy driver?",
    options: [
      "Advisory",
      "Internal",
      "Regulatory",
      "Organisational"
    ],
    correctAnswer: "Regulatory",
    explanation: "Regulations are mandatory policies imposed by external legal or governmental bodies."
  },
  {
    question: "During an incident response process, the first step after detecting a potential security breach should be to:",
    options: [
      "Eradicate the threat from all affected systems",
      "Notify law enforcement agencies",
      "Contain the incident to prevent further damage",
      "Restore affected systems to normal operation"
    ],
    correctAnswer: "Contain the incident to prevent further damage",
    explanation: "Containment is crucial in the initial response to limit the scope and impact of a security incident."
  },
  {
    question: "Which of the following is a key element of due diligence in information security?",
    options: [
      "Implementing security controls based on best practices",
      "Regularly reviewing and updating security policies",
      "Ensuring employees receive security awareness training",
      "Actively monitoring and testing the effectiveness of implemented controls"
    ],
    correctAnswer: "Actively monitoring and testing the effectiveness of implemented controls",
    explanation: "Due diligence involves ongoing vigilance and verification that implemented controls are functioning as intended and effectively mitigating risks."
  },
  {
    question: "A company is considering outsourcing a critical IT function to a third-party vendor. What is the most important aspect of supply chain risk management to address before finalising the contract?",
    options: [
      "The vendor's financial stability",
      "The vendor's physical security controls",
      "Clearly defined security requirements and responsibilities in the contract",
      "The vendor's employee background check procedures"
    ],
    correctAnswer: "Clearly defined security requirements and responsibilities in the contract",
    explanation: "The contract should explicitly outline the security expectations, standards, and obligations of both the company and the vendor."
  },
  {
    question: "Which security concept ensures that information is accessible and usable upon demand by authorised users?",
    options: [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Authenticity"
    ],
    correctAnswer: "Availability",
    explanation: "Availability ensures that authorised users can access information and resources when they need them."
  },
  {
    question: "An organisation needs to classify its data based on sensitivity. Which of the following factors should be given the highest priority when determining the classification level?",
    options: [
      "The age of the data",
      "The location where the data is stored",
      "The potential impact of unauthorised disclosure",
      "The cost associated with protecting the data"
    ],
    correctAnswer: "The potential impact of unauthorised disclosure",
    explanation: "Data classification primarily focuses on the sensitivity of the information and the potential harm that could result from its unauthorised disclosure."
  },
  {
    question: "Which of the following is a proactive approach to risk management?",
    options: [
      "Responding to security incidents as they occur",
      "Implementing security controls to prevent potential threats",
      "Analysing the impact of past security breaches",
      "Reviewing security policies after a regulatory change"
    ],
    correctAnswer: "Implementing security controls to prevent potential threats",
    explanation: "A proactive approach involves taking preventive measures to reduce the likelihood and impact of threats before they occur."
  },
  {
    question: "A security team is developing a Business Impact Analysis (BIA). What is the primary objective of identifying critical business functions during this process?",
    options: [
      "To document all IT assets used by the organisation",
      "To determine the financial losses resulting from past incidents",
      "To prioritise functions based on their impact on organisational viability",
      "To identify all potential threats to the organisation's operations"
    ],
    correctAnswer: "To prioritise functions based on their impact on organisational viability",
    explanation: "The BIA aims to identify and prioritize critical business functions based on their importance to the organisation's survival."
  },
  {
    question: "Which of the following describes a situation where an ethical disclosure of a vulnerability would be necessary?",
    options: [
      "Discovering a misconfiguration on the company's internal server",
      "Identifying a zero-day vulnerability in a widely used software product",
      "Observing a colleague violating company policy",
      "Finding outdated security software on a personal device connected to the network"
    ],
    correctAnswer: "Identifying a zero-day vulnerability in a widely used software product",
    explanation: "Ethical disclosure involves responsibly informing the vendor and potentially the public about previously unknown vulnerabilities that could be exploited."
  },
  {
    question: "A security manager is implementing a security awareness program and wants to use a method that simulates real-world attacks to identify areas needing improvement. Which technique would be most effective?",
    options: [
      "Distributing security posters with awareness tips",
      "Conducting periodic quizzes on security policies",
      "Running simulated phishing campaigns",
      "Organising workshops on password security"
    ],
    correctAnswer: "Running simulated phishing campaigns",
    explanation: "Phishing simulations test users' ability to identify and respond to social engineering attacks, providing valuable data on areas where awareness needs improvement."
  },
  {
    question: "Which of the following is a key principle of the 'zero trust' security model?",
    options: [
      "Granting implicit trust to users within the corporate network",
      "Relying primarily on perimeter security controls",
      "Verifying every user and device before granting access",
      "Assuming all systems are inherently secure"
    ],
    correctAnswer: "Verifying every user and device before granting access",
    explanation: "Zero trust operates on the principle of 'never trust, always verify,' requiring strict authentication and authorisation for every access request."
  },
  {
    question: "An organisation is required to comply with multiple international privacy laws. Which of the following principles is generally consistent across most of these regulations?",
    options: [
      "Mandatory data localisation within the country of origin",
      "Strict limits on the duration of data retention",
      "The right of individuals to access and control their personal data",
      "Standardised data encryption algorithms"
    ],
    correctAnswer: "The right of individuals to access and control their personal data",
    explanation: "Most international privacy laws grant individuals certain rights over their personal data, including the right to access, rectify, and in some cases, erase their information."
  },
  {
    question: "Which of the following frameworks provides a comprehensive set of controls and best practices for information security management systems?",
    options: [
      "NIST Cybersecurity Framework",
      "COBIT",
      "ISO/IEC 27001",
      "ITIL"
    ],
    correctAnswer: "ISO/IEC 27001",
    explanation: "ISO/IEC 27001 is an international standard that specifies the requirements for establishing, implementing, maintaining, and continually improving an information security management system (ISMS)."
  },
  {
    question: "During a risk assessment, the likelihood of a threat exploiting a vulnerability is assessed as high, but the potential business impact is low. How should this risk be prioritised relative to a risk with low likelihood but high impact?",
    options: [
      "The high likelihood, low impact risk should always be prioritised higher",
      "The low likelihood, high impact risk should always be prioritised higher",
      "Both risks should be carefully evaluated based on the organisation's risk appetite",
      "Neither risk requires immediate attention due to the low or manageable impact"
    ],
    correctAnswer: "Both risks should be carefully evaluated based on the organisation's risk appetite",
    explanation: "Risk prioritisation should consider both likelihood and impact, as well as the organisation's tolerance for different types and levels of risk."
  },
  {
    question: "Which of the following roles typically holds the ultimate responsibility for the security of an organisation's information assets?",
    options: [
      "The Chief Information Security Officer (CISO)",
      "The IT Manager",
      "Senior Management/Executive Leadership",
      "The Security Analyst"
    ],
    correctAnswer: "Senior Management/Executive Leadership",
    explanation: "While the CISO and security team are responsible for implementing and managing security, the ultimate accountability for organisational security rests with senior management."
  },
  {
    question: "Which of the following is a detective security control?",
    options: [
      "Implementing strong password policies",
      "Installing firewall rules to block malicious traffic",
      "Monitoring system logs for suspicious activity",
      "Using multi-factor authentication"
    ],
    correctAnswer: "Monitoring system logs for suspicious activity",
    explanation: "Detective controls aim to identify and alert on security events that have already occurred. Monitoring logs helps detect suspicious or malicious actions."
  },
  {
    question: "An organisation needs to ensure the integrity of its sensitive data stored in a database. Which security concept is most directly relevant?",
    options: [
      "Confidentiality controls",
      "Access control mechanisms",
      "Hashing algorithms",
      "Encryption techniques"
    ],
    correctAnswer: "Hashing algorithms",
    explanation: "Hashing algorithms create a unique, fixed-size digest of data. Any modification to the data will result in a different hash value, allowing for verification of integrity."
  },
  {
    question: "Which of the following is a critical step in developing a security policy?",
    options: [
      "Selecting specific security products",
      "Defining clear and enforceable rules",
      "Determining the technical implementation details",
      "Assigning individual users to specific access groups"
    ],
    correctAnswer: "Defining clear and enforceable rules",
    explanation: "Effective security policies must have clearly defined rules that are specific, unambiguous, and capable of being enforced."
  },
  {
    question: "A company is implementing a cloud-based service. According to the shared responsibility model, which security responsibilities typically remain with the company (the customer)?",
    options: [
      "Securing the physical infrastructure of the cloud provider",
      "Managing the network controls of the cloud environment",
      "Protecting the data and applications stored in the cloud",
      "Ensuring the hypervisor security of the cloud platform"
    ],
    correctAnswer: "Protecting the data and applications stored in the cloud",
    explanation: "In the shared responsibility model, the cloud provider typically secures the infrastructure 'up to the hypervisor,' while the customer retains responsibility for the security of their data and applications."
  },
  {
    question: "Which of the following is the primary purpose of a Computer Security Incident Response Team (CSIRT)?",
    options: [
      "To prevent all security incidents from occurring",
      "To investigate and respond to security incidents effectively",
      "To develop and implement security policies",
      "To conduct regular security awareness training"
    ],
    correctAnswer: "To investigate and respond to security incidents effectively",
    explanation: "The primary function of a CSIRT is to manage the incident response lifecycle, including detection, analysis, containment, eradication, recovery, and post-incident activities."
  },
  {
    question: "Which of the following best describes 'defence in depth'?",
    options: [
      "Implementing a single, strong security control",
      "Relying solely on perimeter security",
      "Using multiple, layered security controls",
      "Automating all security processes"
    ],
    correctAnswer: "Using multiple, layered security controls",
    explanation: "Defence in depth involves implementing a layered security approach with diverse controls to increase resilience and reduce the likelihood of a single point of failure."
  },
  {
    question: "An organisation wants to ensure business continuity in the event of a prolonged power outage. Which of the following is a critical component of their plan?",
    options: [
      "Implementing strong authentication mechanisms",
      "Regularly patching all critical systems",
      "Having a reliable backup power source",
      "Conducting frequent vulnerability assessments"
    ],
    correctAnswer: "Having a reliable backup power source",
    explanation: "A backup power source (such as a generator or UPS) is critical for maintaining operations during a power outage, supporting business continuity."
  },
  {
    question: "Which of the following legal concepts refers to the obligation to act as a reasonably prudent person would under similar circumstances?",
    options: [
      "Due diligence",
      "Due care",
      "Liability",
      "Negligence"
    ],
    correctAnswer: "Due care",
    explanation: "Due care refers to the standard of conduct expected of a reasonably prudent person under similar circumstances."
  },
  {
    question: "During a threat modeling exercise for a web application, the team identifies a risk of cross-site scripting (XSS) attacks. This is primarily a threat to which security principle?",
    options: [
      "Availability",
      "Integrity",
      "Confidentiality",
      "Nonrepudiation"
    ],
    correctAnswer: "Confidentiality",
    explanation: "While XSS can impact integrity and availability, its primary threat is often the ability for attackers to inject malicious scripts that can steal sensitive information like session cookies or user credentials, thus compromising confidentiality."
  },
  {
    question: "Which of the following is a key benefit of participating in information security professional organisations like ISC2?",
    options: [
      "Guaranteed employment in the cybersecurity field",
      "Access to a wide network of security professionals and resources",
      "Exemption from mandatory security awareness training",
      "Exclusive rights to develop security standards"
    ],
    correctAnswer: "Access to a wide network of security professionals and resources",
    explanation: "Professional organisations provide networking opportunities, access to knowledge bases, best practices, and contribute to professional development."
  },
  {
    question: "A company is implementing a Bring Your Own Device (BYOD) policy. Which of the following is a key security consideration?",
    options: [
      "Mandating the use of specific hardware vendors",
      "Prohibiting personal use of devices for work",
      "Implementing mobile device management (MDM) solutions",
      "Requiring all devices to be physically located within the office premises"
    ],
    correctAnswer: "Implementing mobile device management (MDM) solutions",
    explanation: "MDM solutions help enforce security policies on personal devices accessing corporate resources, addressing risks associated with BYOD."
  },
  {
    question: "Which of the following is a primary goal of physical security controls?",
    options: [
      "Preventing unauthorised logical access to systems",
      "Ensuring the availability of network bandwidth",
      "Protecting personnel, assets, and facilities from physical threats",
      "Detecting and responding to cyberattacks"
    ],
    correctAnswer: "Protecting personnel, assets, and facilities from physical threats",
    explanation: "Physical security controls are designed to prevent unauthorised physical access, damage, or theft."
  },
  {
    question: "An organisation is developing a data retention policy. Which of the following should be a key factor in determining the retention period for specific data types?",
    options: [
      "The cost of storage",
      "The ease of data retrieval",
      "Legal and regulatory requirements",
      "The frequency with which the data is accessed"
    ],
    correctAnswer: "Legal and regulatory requirements",
    explanation: "Data retention policies are often driven by legal and regulatory obligations that specify how long certain types of data must be kept."
  },
  {
    question: "Which of the following is a primary objective of security investigations?",
    options: [
      "To implement new security controls",
      "To identify the root cause and responsible parties of security incidents",
      "To conduct regular security audits",
      "To provide training to employees on incident reporting"
    ],
    correctAnswer: "To identify the root cause and responsible parties of security incidents",
    explanation: "Security investigations aim to understand the details of security incidents to inform response, remediation, and future prevention efforts."
  },
  {
    question: "Which of the following is a key aspect of personnel security policies and procedures related to onboarding new employees?",
    options: [
      "Regularly monitoring their network activity",
      "Immediately granting them access to all systems",
      "Conducting thorough background checks",
      "Restricting their internet access"
    ],
    correctAnswer: "Conducting thorough background checks",
    explanation: "Background checks help assess the trustworthiness of new hires and mitigate potential insider threats."
  },
  {
    question: "Which of the following is a primary benefit of establishing and maintaining a security awareness, education, and training program?",
    options: [
      "Eliminating all insider threats",
      "Reducing the likelihood of human error leading to security incidents",
      "Fully automating the organisation's security posture",
      "Ensuring all employees obtain security certifications"
    ],
    correctAnswer: "Reducing the likelihood of human error leading to security incidents",
    explanation: "Awareness programs educate users about security risks and best practices, making them less likely to fall victim to attacks or make security mistakes."
  },
  {
    question: "A company is implementing a new access control model where access is granted based on predefined roles associated with job functions. Which model is being implemented?",
    options: [
      "Discretionary Access Control (DAC)",
      "Mandatory Access Control (MAC)",
      "Role-Based Access Control (RBAC)",
      "Attribute-Based Access Control (ABAC)"
    ],
    correctAnswer: "Role-Based Access Control (RBAC)",
    explanation: "RBAC grants access based on a user's assigned roles within the organisation, simplifying access management."
  },
  {
    question: "Which of the following is a key principle to consider when designing secure facilities?",
    options: [
      "Maximising accessibility for all employees at all times",
      "Implementing security controls only at the perimeter",
      "Applying the principle of 'least privilege' to physical access",
      "Relying solely on security guards for access control"
    ],
    correctAnswer: "Applying the principle of 'least privilege' to physical access",
    explanation: "Physical least privilege means granting access only to the areas required for an individual to perform their job duties."
  },
  {
    question: "Which of the following is a primary purpose of establishing Service Level Agreements (SLAs) with third-party vendors?",
    options: [
      "To ensure the lowest possible cost for services",
      "To guarantee a specific level of performance and security",
      "To transfer all security responsibilities to the vendor",
      "To limit the vendor's liability in case of a security breach"
    ],
    correctAnswer: "To guarantee a specific level of performance and security",
    explanation: "SLAs define the expected service levels, including security standards, that the vendor must meet."
  },
  {
    question: "During a risk treatment process, senior management decides to not implement a recommended control due to the high cost, acknowledging the potential risk. This is an example of:",
    options: [
      "Risk avoidance",
      "Risk mitigation",
      "Risk transference",
      "Risk acceptance"
    ],
    correctAnswer: "Risk acceptance",
    explanation: "Risk acceptance involves acknowledging a potential risk and consciously deciding to take no action to mitigate it, often due to cost or other considerations."
  },
  {
    question: "Which of the following is a primary objective of threat intelligence?",
    options: [
      "To implement preventative security controls",
      "To understand the capabilities and motivations of potential adversaries",
      "To respond to active security incidents",
      "To conduct forensic analysis after a breach"
    ],
    correctAnswer: "To understand the capabilities and motivations of potential adversaries",
    explanation: "Threat intelligence provides insights into who the attackers are, how they operate, and what their goals might be."
  },
  {
    question: "Which of the following is a key element of an effective patch management process?",
    options: [
      "Immediately deploying all vendor-released patches to production systems",
      "Thoroughly testing patches in a non-production environment before deployment",
      "Allowing individual users to manage software updates on their workstations",
      "Only applying security patches during scheduled maintenance windows, regardless of severity"
    ],
    correctAnswer: "Thoroughly testing patches in a non-production environment before deployment",
    explanation: "Testing ensures that patches do not introduce instability or compatibility issues into production systems."
  },
  {
    question: "Which of the following is a key principle of data security?",
    options: [
      "Ensuring all data is publicly accessible to promote transparency",
      "Protecting data throughout its lifecycle",
      "Storing all data in a single, centralised location",
      "Limiting data collection to only essential information, regardless of future needs"
    ],
    correctAnswer: "Protecting data throughout its lifecycle",
    explanation: "Data security encompasses all stages from creation to disposal, requiring appropriate controls at each phase."
  },
  {
    question: "A security manager is developing a business continuity plan and needs to determine the Recovery Point Objective (RPO) for a critical database. The RPO should reflect:",
    options: [
      "The maximum amount of data loss that is acceptable",
      "The time it takes to restore the database to full operation",
      "The cost associated with backing up the database",
      "The location where the database backups are stored"
    ],
    correctAnswer: "The maximum amount of data loss that is acceptable",
    explanation: "RPO defines the point in time to which data must be recovered after a disruption, effectively determining the acceptable data loss window."
  }
];