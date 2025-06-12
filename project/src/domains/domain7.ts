import { Domain } from './types';

export const domain7: Domain = {
  id: 7,
  name: "Security Operations",
  description: "Conducting investigations and implementing preventative measures",
  questions: 
  [
    {
      "id": 1,
      "question": "Your organisation suspects a data breach has occurred. As the security manager, what is the first and most critical step you should take according to incident management best practices?",
      "options": [
        "Immediately notify law enforcement.",
        "Begin immediate, detailed documentation of every action taken.",
        "Eradicate the potential threat.",
        "Restore affected systems to normal operation."
      ],
      "correctAnswer": 1,
      "explanation": "Upon determination that an incident has occurred, you should begin immediate, detailed documentation of every action taken throughout the incident management process. This documentation is crucial for analysis, reporting, and potential legal proceedings. While other steps like notification and eradication are important, thorough documentation from the outset provides a clear record of the incident response."
    },
    {
      "id": 2,
      "question": "During a security incident investigation, you discover a server that might contain crucial evidence. To ensure the integrity and admissibility of this evidence, what procedure must be strictly followed?",
      "options": [
        "Creating a forensic copy of the drive.",
        "Isolating the server from the network.",
        "Maintaining a strict chain of custody.",
        "Powering down the server immediately to prevent further damage."
      ],
      "correctAnswer": 2,
      "explanation": "Maintaining a strict chain of custody is essential for the admissibility of evidence in legal proceedings. The chain of custody documents the seizure, transfer, analysis, and storage of evidence, ensuring its integrity is not compromised."
    },
    {
      "id": 3,
      "question": "Your organisation is implementing a new security information and event management (SIEM) system. What is the primary goal of this detective measure?",
      "options": [
        "To prevent all security incidents from occurring.",
        "To passively detect unauthorised activity on a network.",
        "To actively block malicious traffic at the network perimeter.",
        "To enforce strict access control policies."
      ],
      "correctAnswer": 1,
      "explanation": "An intrusion detection system (IDS), which is a key component integrated into most SIEM systems, is a passive technique used to detect unauthorised activity on a network. It monitors network traffic for suspicious patterns and alerts security personnel."
    },
    {
      "id": 4,
      "question": "A new system is being provisioned for the finance department, which handles sensitive financial data. Applying the principle of least privilege, what is the most appropriate approach for granting access to this system?",
      "options": [
        "Grant all finance department users administrator access for ease of use.",
        "Grant users only the necessary permissions required to perform their specific job functions.",
        "Grant access based on their seniority within the finance department.",
        "Grant read-only access to all users by default and escalate privileges upon request."
      ],
      "correctAnswer": 1,
      "explanation": "The principle of least privilege dictates that users should be granted only the minimum level of access necessary to perform their assigned duties. This helps to limit the potential damage that can be caused by accidental or malicious actions."
    },
    {
      "id": 5,
      "question": "Your organisation needs to protect its critical servers located in the data centre. What is the most fundamental physical security control you should implement at the perimeter of the data centre?",
      "options": [
        "Installing CCTV cameras with facial recognition.",
        "Deploying biometric access control systems.",
        "Implementing facility access control.",
        "Hiring armed security guards."
      ],
      "correctAnswer": 2,
      "explanation": "Ensuring physical security requires appropriate controls at the physical perimeter, including facility access control to manage who can enter the data centre. This is a foundational control that precedes more advanced measures."
    },
    {
      "id": 6,
      "question": "During an incident response, you need to contain the spread of a suspected malware infection. What is a common and effective containment strategy?",
      "options": [
        "Immediately powering off all affected systems.",
        "Disconnecting affected systems from the network.",
        "Running a full antivirus scan on all systems simultaneously.",
        "Notifying all employees about the potential infection."
      ],
      "correctAnswer": 1,
      "explanation": "A crucial step in incident handling is containment to limit the scope and impact of the incident. Disconnecting affected systems from the network is a common method to prevent the malware from spreading to other systems."
    },
    {
      "id": 7,
      "question": "Your organisation receives a security advisory from a vendor regarding a critical vulnerability in its firewall software. According to patch and vulnerability management best practices, what is the next step you should take?",
      "options": [
        "Immediately apply the patch to all firewall devices.",
        "Perform a risk analysis on the advisory and patch to determine its applicability and risk to your organisation.",
        "Forward the advisory to the IT department for immediate action.",
        "Ignore the advisory if there have been no reported exploits in the wild."
      ],
      "correctAnswer": 1,
      "explanation": "After subscribing to security advisories, the next step in patch and vulnerability management is to perform a risk analysis to understand the potential impact of the vulnerability on your specific environment and the criticality of the patch."
    },
    {
      "id": 8,
      "question": "What is the primary objective of a disaster recovery plan (DRP)?",
      "options": [
        "To prevent disasters from occurring.",
        "To keep business operations running during a disaster.",
        "To restore normal business operations after a disaster takes place.",
        "To identify potential threats and vulnerabilities."
      ],
      "correctAnswer": 2,
      "explanation": "Disaster recovery specifically deals with restoring normal business operations after a disaster has occurred. Business continuity (BC) focuses on maintaining operations during the disruption."
    },
    {
      "id": 9,
      "question": "Your organisation is planning its annual disaster recovery testing. What is the ultimate and most comprehensive type of test that can be performed?",
      "options": [
        "A tabletop exercise.",
        "A simulation.",
        "A full interruption test.",
        "A parallel test."
      ],
      "correctAnswer": 2,
      "explanation": "A full interruption test is the ultimate test of a disaster recovery system's ability to perform properly in a real disaster. However, it also carries the highest risk and cost due to the complete interruption of normal operations."
    },
    {
      "id": 10,
      "question": "In business continuity planning, what is the key focus in the immediate aftermath of a disruptive event?",
      "options": [
        "Restoring IT infrastructure.",
        "Relocating to a secondary site.",
        "Keeping critical business processes running.",
        "Assessing the total financial impact of the event."
      ],
      "correctAnswer": 2,
      "explanation": "Business continuity deals with keeping business operations running – perhaps in another location or by using different tools and processes – after a disaster has struck."
    },
    {
      "id": 11,
      "question": "As a security analyst, you are reviewing system logs and notice an unusual spike in failed login attempts from a specific external IP address targeting a critical server. This is an example of what in incident management?",
      "options": [
        "Preparation.",
        "Detection and Analysis.",
        "Containment.",
        "Recovery."
      ],
      "correctAnswer": 1,
      "explanation": "Observing unusual activity in system logs and analysing its potential impact falls under the Detection and Analysis phase of incident handling. This phase involves identifying and understanding potential security incidents."
    },
    {
      "id": 12,
      "question": "Your organisation is implementing a job rotation policy for security administrators who manage critical infrastructure. What is the primary security benefit of this practice?",
      "options": [
        "Increasing employee morale.",
        "Reducing the risk of fraud and single points of failure in knowledge.",
        "Improving the efficiency of security operations.",
        "Ensuring compliance with industry regulations."
      ],
      "correctAnswer": 1,
      "explanation": "Job rotation helps to reduce the risk of fraud by making it harder for any single individual to engage in malicious activities without detection. It also prevents a single point of failure in knowledge, as multiple individuals become familiar with critical systems."
    },
    {
      "id": 13,
      "question": "What is the main purpose of conducting a post-incident activity review after a significant security incident?",
      "options": [
        "To assign blame to responsible individuals.",
        "To identify lessons learned and improve incident response procedures.",
        "To immediately implement new security controls.",
        "To reassure stakeholders that the incident is fully resolved."
      ],
      "correctAnswer": 1,
      "explanation": "The post-incident activity phase focuses on identifying lessons learned, documenting them, and using this information to improve the incident management plan and procedures for future incidents."
    },
    {
      "id": 14,
      "question": "During a digital forensics investigation, you need to preserve the original state of a hard drive containing potential evidence. What is the standard procedure for achieving this?",
      "options": [
        "Directly analysing the data on the original hard drive.",
        "Creating a bit-by-bit forensic image of the hard drive.",
        "Running recovery software on the hard drive to retrieve deleted files.",
        "Allowing read-only access to the hard drive for investigation."
      ],
      "correctAnswer": 1,
      "explanation": "To properly preserve digital evidence, investigators create a bit-by-bit forensic image (a complete copy) of the original media. All analysis is then performed on this copy, ensuring the original evidence remains unaltered."
    },
    {
      "id": 15,
      "question": "Your organisation is considering implementing a new cloud-based service. From a security operations perspective, what is a critical aspect to consider during the resource provisioning process?",
      "options": [
        "The service provider's marketing materials.",
        "The cost-effectiveness of the service.",
        "Consulting security personnel to ensure security requirements are met.",
        "The ease of integration with existing systems, regardless of security implications."
      ],
      "correctAnswer": 2,
      "explanation": "Security should be consulted any time the organisation is considering introducing new equipment or services, such as a cloud-based service, to ensure that security requirements are addressed from the outset of the provisioning process."
    },
    {
      "id": 16,
      "question": "What security operations concept involves separating tasks and responsibilities so that one individual cannot complete a critical process alone?",
      "options": [
        "Need to know.",
        "Least privilege.",
        "Separation of duties and responsibilities.",
        "Job rotation."
      ],
      "correctAnswer": 2,
      "explanation": "Separation of duties and responsibilities is a fundamental security principle that divides critical tasks among different individuals to prevent fraud, errors, and abuse of power."
    },
    {
      "id": 17,
      "question": "Your organisation's security policy requires that all employees undergo security awareness training annually. What is the primary goal of this training program?",
      "options": [
        "To turn all employees into security experts.",
        "To ensure compliance with regulatory requirements.",
        "To reduce the risk of security incidents caused by human error.",
        "To punish employees who violate security policies."
      ],
      "correctAnswer": 2,
      "explanation": "The primary goal of a security awareness, education, and training program is to make users aware of security risks and educate them on safe practices to reduce the likelihood of security incidents resulting from unintentional actions."
    },
    {
      "id": 18,
      "question": "During a security audit, what is the main objective of examining system and process documentation?",
      "options": [
        "To test the technical effectiveness of security controls.",
        "To verify that systems and processes are designed and used properly and effectively.",
        "To identify vulnerabilities in the underlying hardware.",
        "To assess employee compliance with security policies."
      ],
      "correctAnswer": 1,
      "explanation": "Auditing involves the examination of systems and/or business processes to ensure that they've been designed properly, used properly, and considered effective. Documentation provides evidence of these aspects."
    },
    {
      "id": 19,
      "question": "What is the first step in the general investigative process following the report of a potential security incident?",
      "options": [
        "Collecting all available digital evidence.",
        "Identifying potential witnesses.",
        "Conducting a preliminary investigation.",
        "Preparing for search and seizure."
      ],
      "correctAnswer": 2,
      "explanation": "An investigation should begin immediately upon report with a preliminary investigation to determine the nature and scope of the alleged incident. This helps in deciding the subsequent steps."
    },
    {
      "id": 20,
      "question": "Your organisation's web server has been defaced. As part of the incident response, after containing the incident, what is the next critical phase according to NIST SP 800-61 Revision 2?",
      "options": [
        "Detection and Analysis.",
        "Preparation.",
        "Eradication.",
        "Recovery."
      ],
      "correctAnswer": 2,
      "explanation": "The phases of incident handling according to NIST SP 800-61 Revision 2 are Preparation; Detection and Analysis; Containment, Eradication, and Recovery; and Post-Incident Activity. After containment, the next step is typically eradication to eliminate the cause of the incident."
    },
    {
      "id": 21,
      "question": "What type of intrusion detection system (IDS) analyses network traffic patterns and compares them to a baseline of normal activity to identify anomalies?",
      "options": [
        "Signature-based IDS.",
        "Policy-based IDS.",
        "Anomaly-based IDS.",
        "Reputation-based IDS."
      ],
      "correctAnswer": 2,
      "explanation": "An anomaly-based IDS detects intrusions by monitoring network traffic and identifying deviations from established normal behaviour patterns."
    },
    {
      "id": 22,
      "question": "When dealing with evidence collection, what term refers to oral testimony or a written statement based on information gathered through a witness's five senses?",
      "options": [
        "Circumstantial evidence.",
        "Hearsay evidence.",
        "Direct evidence.",
        "Corroborative evidence."
      ],
      "correctAnswer": 2,
      "explanation": "Direct evidence is defined as oral testimony or a written statement based on information gathered through a witness’s five senses that proves or disproves a specific fact or issue."
    },
    {
      "id": 23,
      "question": "Your organisation's security policy mandates the use of strong passwords. What is considered a best practice for enforcing strong password policies?",
      "options": [
        "Regularly reminding users to change their passwords.",
        "Implementing technical controls such as password complexity requirements and lockout thresholds.",
        "Educating users on how to choose memorable but weak passwords.",
        "Storing user passwords in plain text for easy retrieval."
      ],
      "correctAnswer": 1,
      "explanation": "Enforcing strong password policies effectively relies on technical controls within the IAM system to dictate password complexity, length, and other characteristics, as well as implementing lockout mechanisms to deter brute-force attacks."
    },
    {
      "id": 24,
      "question": "What is the primary goal of implementing resource protection controls?",
      "options": [
        "To ensure compliance with data privacy regulations.",
        "To protect information assets and information infrastructure.",
        "To improve the performance and availability of IT systems.",
        "To provide a secure working environment for employees."
      ],
      "correctAnswer": 1,
      "explanation": "Resource protection is the broad category of controls that directly aim to protect information assets and the underlying information infrastructure from various threats."
    },
    {
      "id": 25,
      "question": "During incident handling, what is the importance of establishing a response authority within the Computer Incident Response Team (CIRT)?",
      "options": [
        "To ensure all team members have equal decision-making power.",
        "To clearly define roles, responsibilities, and levels of authority for all CIRT members.",
        "To delay decision-making to allow for thorough analysis.",
        "To avoid assigning blame in case of errors during the response."
      ],
      "correctAnswer": 1,
      "explanation": "Clearly defining roles, responsibilities, and levels of authority within the CIRT ensures an efficient and coordinated response during an incident by establishing who is responsible for making specific decisions and taking particular actions."
    },
    {
      "id": 26,
      "question": "Your organisation uses firewalls as a key preventive measure. Where are firewalls typically deployed in a network architecture?",
      "options": [
        "Only on individual workstations.",
        "Primarily within internal network segments.",
        "Typically at the network or data centre perimeter and other network boundaries.",
        "Exclusively in cloud environments."
      ],
      "correctAnswer": 2,
      "explanation": "Firewalls are strategically deployed at the network perimeter to control inbound and outbound traffic, as well as at other trust boundaries within the network to segment and protect different zones. Host-based firewalls are also used on endpoints."
    },
    {
      "id": 27,
      "question": "What is the process of actively managing the configuration of every system, device, and application and thoroughly documenting those configurations?",
      "options": [
        "Change management.",
        "Vulnerability management.",
        "Configuration management.",
        "Asset management."
      ],
      "correctAnswer": 2,
      "explanation": "Configuration management involves actively managing and documenting the configuration of all systems, devices, and applications within the organisation. This provides a baseline and helps track changes."
    },
    {
      "id": 28,
      "question": "Implementing redundancy in critical systems is a key aspect of what security operations activity?",
      "options": [
        "Incident management.",
        "Vulnerability management.",
        "Recovery strategies.",
        "Change management."
      ],
      "correctAnswer": 2,
      "explanation": "Recovery strategies often involve implementing redundancy in hardware, software, and data to ensure the availability of critical systems even in the event of failures or disasters."
    },
    {
      "id": 29,
      "question": "What is the purpose of conducting a tabletop exercise as part of disaster recovery planning?",
      "options": [
        "To simulate a real disaster scenario with full system failover.",
        "To test the technical capabilities of the recovery systems.",
        "To discuss and walk through the disaster recovery plan with key stakeholders.",
        "To perform a physical relocation to the secondary recovery site."
      ],
      "correctAnswer": 2,
      "explanation": "A tabletop exercise is a facilitated discussion where key stakeholders walk through the steps of the disaster recovery plan to identify gaps, clarify roles, and ensure everyone understands their responsibilities. It does not involve actual system failover."
    },
    {
      "id": 30,
      "question": "What is the relationship between business continuity planning and disaster recovery planning?",
      "options": [
        "They are the same activity with different names.",
        "Disaster recovery planning is a subset of business continuity planning.",
        "Business continuity planning is a subset of disaster recovery planning.",
        "They are independent activities with no overlap."
      ],
      "correctAnswer": 1,
      "explanation": "Business continuity planning is a broader discipline that encompasses keeping the business running during a disruption, while disaster recovery planning focuses specifically on restoring IT infrastructure and operations after a disaster."
    },
    {
      "id": 31,
      "question": "As a security manager, you need to ensure that only authorised personnel can access sensitive areas within your organisation. What is a common physical security control to manage this?",
      "options": [
        "Installing bright lighting in all areas.",
        "Implementing visitor control procedures.",
        "Providing security awareness training to all employees.",
        "Conducting background checks on all vendors."
      ],
      "correctAnswer": 1,
      "explanation": "Visitor control is a key aspect of physical security that ensures the organisation knows who is on the premises, why they are there, and that they are appropriately supervised, thus controlling access to sensitive areas."
    },
    {
      "id": 32,
      "question": "What is a critical security concern to address when employees travel for business?",
      "options": [
        "Ensuring they have adequate travel insurance.",
        "Making sure they are briefed on important safety precautions, including local laws and customs.",
        "Providing them with company-branded luggage.",
        "Tracking their location at all times using GPS."
      ],
      "correctAnswer": 1,
      "explanation": "When personnel are traveling, the organisation should ensure they are appropriately briefed on important safety precautions, including local laws and customs, travel advisories, and high-crime areas to avoid, to mitigate potential risks."
    },
    {
      "id": 33,
      "question": "In the context of investigations, what does the term \"chain of custody\" refer to?",
      "options": [
        "The legal process for obtaining search warrants.",
        "The sequence of documentation showing the seizure, custody, control, transfer, analysis, and disposition of evidence.",
        "The list of individuals who have potential access to the crime scene.",
        "The procedures for securely storing digital evidence."
      ],
      "correctAnswer": 1,
      "explanation": "The chain of custody is a critical process that documents every person who handled the evidence, the date and time it was handled, and what was done with it. This ensures the integrity and admissibility of the evidence in legal proceedings."
    },
    {
      "id": 34,
      "question": "What is the primary function of an intrusion prevention system (IPS)?",
      "options": [
        "To passively monitor network traffic for malicious activity.",
        "To actively block or prevent detected malicious activity.",
        "To log all network traffic for forensic analysis.",
        "To encrypt network communications."
      ],
      "correctAnswer": 1,
      "explanation": "Unlike an IDS, an intrusion prevention system (IPS) actively takes action to block or prevent detected malicious traffic or activity based on predefined rules and signatures."
    },
    {
      "id": 35,
      "question": "When provisioning new user accounts, what security operations principle should guide the assignment of initial privileges?",
      "options": [
        "Granting broad access to ensure users can perform all potential tasks.",
        "Following the principle of least privilege.",
        "Granting access based on the user's department.",
        "Assigning administrator privileges by default for new users."
      ],
      "correctAnswer": 1,
      "explanation": "The principle of least privilege is fundamental when provisioning user accounts. Users should only be granted the minimum necessary permissions to perform their specific job duties."
    },
    {
      "id": 36,
      "question": "What security operations concept involves scheduling employees to work in different roles periodically?",
      "options": [
        "Separation of duties.",
        "Mandatory vacations.",
        "Job rotation.",
        "Dual control."
      ],
      "correctAnswer": 2,
      "explanation": "Job rotation is the practice of periodically moving employees between different roles or responsibilities. This can help to detect potential fraud and prevent reliance on a single individual for critical tasks."
    },
    {
      "id": 37,
      "question": "What is a key consideration when developing security planning for resource provisioning?",
      "options": [
        "Focusing solely on the initial cost of the resource.",
        "Consulting security personnel to address security implications.",
        "Prioritising ease of deployment over security requirements.",
        "Assuming default security configurations are sufficient."
      ],
      "correctAnswer": 1,
      "explanation": "Security should be consulted whenever the organisation is considering acquiring new resources to ensure that security requirements are identified and addressed as part of the planning and provisioning process."
    },
    {
      "id": 38,
      "question": "What is the primary purpose of implementing and supporting patch management processes?",
      "options": [
        "To introduce new features to software applications.",
        "To improve the performance of operating systems.",
        "To address known vulnerabilities and security flaws in software.",
        "To ensure software license compliance."
      ],
      "correctAnswer": 2,
      "explanation": "Patch management is crucial for applying vendor-released updates and fixes to software to remediate known vulnerabilities and reduce the risk of exploitation."
    },
    {
      "id": 39,
      "question": "What is the approval-based process that ensures only authorised and tested changes are implemented in an IT environment?",
      "options": [
        "Incident management.",
        "Configuration management.",
        "Change management.",
        "Release management."
      ],
      "correctAnswer": 2,
      "explanation": "Change management is the formal process for approving, scheduling, and implementing changes to IT systems and infrastructure in a controlled manner to minimise disruptions and security risks."
    },
    {
      "id": 40,
      "question": "What is the ultimate goal of implementing disaster recovery (DR) processes?",
      "options": [
        "To prevent all possible disasters.",
        "To minimise the financial impact of a disaster.",
        "To ensure business continuity during a disaster.",
        "To restore the organisation and its affected processes and capabilities to normal operations after a disaster."
      ],
      "correctAnswer": 3,
      "explanation": "Disaster recovery focuses on the restoration of IT systems and business processes to a normal state following a disruptive event."
    },
    {
      "id": 41,
      "question": "What is the purpose of testing a disaster recovery plan (DRP)?",
      "options": [
        "To guarantee that a disaster will never occur.",
        "To identify weaknesses and validate the effectiveness of the recovery procedures.",
        "To train all employees on emergency response procedures.",
        "To satisfy audit requirements without actual simulation."
      ],
      "correctAnswer": 1,
      "explanation": "Testing the DRP is essential to uncover any flaws or gaps in the plan and to verify that the recovery procedures will work as expected when a real disaster strikes."
    },
    {
      "id": 42,
      "question": "What is the role of security professionals in business continuity (BC) planning and exercises?",
      "options": [
        "To solely focus on the recovery of IT systems.",
        "To take an active role by contributing their specialised knowledge and experience to help develop and implement effective BC plans.",
        "To participate only if a security incident is the cause of the business disruption.",
        "To delegate all BC planning responsibilities to the business units."
      ],
      "correctAnswer": 1,
      "explanation": "Security professionals, especially CISSPs, are recognised experts in BC and DR and need to contribute their specialized knowledge and experience to ensure comprehensive and effective BC plans are developed and tested."
    },
    {
      "id": 43,
      "question": "What is a fundamental physical security control at the perimeter of a building?",
      "options": [
        "Installing security cameras inside the building.",
        "Implementing facility access control for entry points.",
        "Conducting background checks on cleaning staff.",
        "Providing personal alarms to employees."
      ],
      "correctAnswer": 1,
      "explanation": "Facility access control, such as locks, access cards, and security personnel at entry points, is a fundamental physical security control for managing who can enter the building."
    },
    {
      "id": 44,
      "question": "When addressing personnel safety and security concerns during travel, what should an organisation develop to contact traveling employees in case of an emergency?",
      "options": [
        "A detailed itinerary of their trip.",
        "A means for being able to contact traveling employees.",
        "A requirement for them to check in daily.",
        "A policy against personal travel during business trips."
      ],
      "correctAnswer": 1,
      "explanation": "Organisations should develop a means for being able to contact traveling employees in the event of an emergency to provide support or relay important information."
    },
    {
      "id": 45,
      "question": "During an investigation, what is the significance of properly documenting the root-cause analysis of an incident?",
      "options": [
        "To assign blame to the responsible individuals.",
        "To understand what happened, how it happened, and how to prevent the same thing from happening again.",
        "To provide legal justification for disciplinary actions.",
        "To create a detailed timeline of events for public disclosure."
      ],
      "correctAnswer": 1,
      "explanation": "Documenting the root-cause analysis helps to identify the underlying reasons why an incident occurred, enabling the organisation to implement corrective actions and prevent future occurrences."
    },
    {
      "id": 46,
      "question": "What type of evidence relies on inference and requires the linking of facts to draw a conclusion?",
      "options": [
        "Direct evidence.",
        "Conclusive evidence.",
        "Circumstantial evidence.",
        "Corroborative evidence."
      ],
      "correctAnswer": 2,
      "explanation": "Circumstantial evidence does not directly prove a fact but suggests it through related circumstances from which inferences can be drawn."
    },
    {
      "id": 47,
      "question": "Implementing multi-factor authentication (MFA) is a key security control for what aspect of security operations?",
      "options": [
        "Physical security.",
        "Incident response.",
        "Identity and access management.",
        "Vulnerability management."
      ],
      "correctAnswer": 2,
      "explanation": "Multi-factor authentication (MFA) is a critical control within identity and access management (IAM) to enhance the security of user authentication by requiring multiple verification factors."
    },
    {
      "id": 48,
      "question": "What is a critical step to take when a security patch cannot be immediately applied due to compatibility issues?",
      "options": [
        "Ignore the vulnerability as the software is still functional.",
        "Implement a compensating control or workaround to mitigate the risk.",
        "Downgrade the software to a previous, stable version.",
        "Disconnect the affected system from the network without any further action."
      ],
      "correctAnswer": 1,
      "explanation": "If a security patch cannot be applied immediately, it is crucial to implement a compensating control or workaround to reduce the risk associated with the unpatched vulnerability until the patch can be deployed."
    },
    {
      "id": 49,
      "question": "What is the primary goal of participating in business continuity exercises?",
      "options": [
        "To test the technical recovery capabilities of IT systems.",
        "To assess the financial resilience of the organisation.",
        "To validate the effectiveness of the business continuity plan and the organisation's ability to maintain critical functions during a disruption.",
        "To train IT staff on disaster recovery procedures."
      ],
      "correctAnswer": 3,
      "explanation": "Business continuity exercises aim to validate the BC plan and ensure that the organisation can continue its essential business functions despite a disruptive event."
    },
    {
      "id": 50,
      "question": "What is a common method for deterring and detecting telephone abuse within an organisation?",
      "options": [
        "Blocking all outgoing international calls.",
        "Publishing and enforcing a corporate telephone-use policy and regularly auditing telephone records.",
        "Restricting telephone use to only business hours.",
        "Removing landline phones and relying solely on mobile devices."
      ],
      "correctAnswer": 1,
      "explanation": "The simplest and most effective countermeasure against internal telephone abuse is publishing and enforcing a corporate telephone-use policy. Regular auditing of telephone records is also effective for deterring and detecting such abuse."
    }
  ],
  flashCards: [
    {
      "id": 1,
      "front": "Need to Know",
      "back": "A security principle that limits access to information to only what is required to perform assigned job functions.",
      "category": "Security Operations"
    },
    {
      "id": 2,
      "front": "Principle of Least Privilege",
      "back": "Grants users the absolute minimum access necessary to complete their work tasks or job responsibilities.",
      "category": "Security Operations"
    },
    {
      "id": 3,
      "front": "Separation of Duties",
      "back": "Dividing critical, significant work tasks among several individuals to prevent any single person from compromising security.",
      "category": "Security Operations"
    },
    {
      "id": 4,
      "front": "Job Rotation",
      "back": "Periodically changing employee work assignments to limit fraud, detect errors, and broaden employee skills and understanding.",
      "category": "Security Operations"
    },
    {
      "id": 5,
      "front": "Accountability",
      "back": "Ensures that actions of individual users can be uniquely traced to those users, holding them responsible for their deeds.",
      "category": "Security Operations"
    },
    {
      "id": 6,
      "front": "Service Level Agreement (SLA)",
      "back": "A quantified statement outlining service provider performance and customer expectations, often used to ensure system availability.",
      "category": "Security Operations"
    },
    {
      "id": 7,
      "front": "Subject (Access Control)",
      "back": "An active entity (e.g., user, program, process) that accesses passive objects to receive or process information.",
      "category": "Security Operations"
    },
    {
      "id": 8,
      "front": "Object (Access Control)",
      "back": "A passive entity (e.g., file, database, printer) that provides information to active subjects.",
      "category": "Security Operations"
    },
    {
      "id": 9,
      "front": "Computer Crime Categories",
      "back": "Six major types of computer crimes are military/intelligence, business, financial, terrorist, grudge, and thrill attacks.",
      "category": "Security Operations"
    },
    {
      "id": 10,
      "front": "Evidence Collection and Handling",
      "back": "The systematic process of gathering and protecting information related to an incident for potential legal action or investigation.",
      "category": "Security Operations"
    },
    {
      "id": 11,
      "front": "Chain of Custody",
      "back": "A chronological documentation of evidence handling, from its collection to its presentation, ensuring its integrity and admissibility in court.",
      "category": "Security Operations"
    },
    {
      "id": 12,
      "front": "Incident Response Steps",
      "back": "A formal process sequence: detection, response, mitigation, reporting, recovery, remediation, and lessons learned.",
      "category": "Security Operations"
    },
    {
      "id": 13,
      "front": "Disaster Recovery Plan (DRP)",
      "back": "A set of procedures to follow when a disaster interrupts normal business operations, guiding efforts to quickly restore services.",
      "category": "Security Operations"
    },
    {
      "id": 14,
      "front": "Hot Site",
      "back": "A fully equipped and constantly maintained backup facility capable of immediate takeover of business operations.",
      "category": "Security Operations"
    },
    {
      "id": 15,
      "front": "Warm Site",
      "back": "A backup facility with preconfigured hardware and software, but requiring some time to load data and resume full operations.",
      "category": "Security Operations"
    },
    {
      "id": 16,
      "front": "Cold Site",
      "back": "A basic backup facility with power and environmental support, but no pre-installed hardware or software; requires the longest activation time.",
      "category": "Security Operations"
    },
    {
      "id": 17,
      "front": "Business Continuity Planning (BCP)",
      "back": "Focuses on ensuring critical business functions continue operating during and after a disaster, potentially at an alternative location.",
      "category": "Security Operations"
    },
    {
      "id": 18,
      "front": "Maximum Tolerable Downtime (MTD)",
      "back": "The maximum period an organization can withstand without a specific business function before suffering unacceptable impact.",
      "category": "Security Operations"
    },
    {
      "id": 19,
      "front": "Intrusion Detection System (IDS)",
      "back": "A passive security measure that monitors network traffic or system activity for unauthorized behavior and alerts administrators.",
      "category": "Security Operations"
    },
    {
      "id": 20,
      "front": "Intrusion Prevention System (IPS)",
      "back": "An active security measure that detects and attempts to block unauthorized activity in real time by analyzing network traffic.",
      "category": "Security Operations"
    },
    {
      "id": 21,
      "front": "Security Information and Event Management (SIEM)",
      "back": "A platform that aggregates, correlates, and analyzes security data from various sources to provide a holistic view of an organization's security posture.",
      "category": "Security Operations"
    },
    {
      "id": 22,
      "front": "Threat Intelligence",
      "back": "Information about existing or emerging threats that helps organizations understand and make informed decisions to mitigate risks.",
      "category": "Security Operations"
    },
    {
      "id": 23,
      "front": "Change Management",
      "back": "An approval-based process that ensures only authorized and controlled modifications are made to IT systems, configurations, and applications.",
      "category": "Security Operations"
    },
    {
      "id": 24,
      "front": "Configuration Management",
      "back": "The process of actively managing and thoroughly documenting the configurations of all systems, devices, and applications within an organization.",
      "category": "Security Operations"
    },
    {
      "id": 25,
      "front": "Patch Management",
      "back": "The systematic process of evaluating, testing, and deploying updates (patches) to software and systems to fix bugs and security vulnerabilities.",
      "category": "Security Operations"
    },
    {
      "id": 26,
      "front": "Vulnerability Assessment",
      "back": "The process of identifying, quantifying, and prioritizing security weaknesses in systems, applications, or processes, and providing remediation steps.",
      "category": "Security Operations"
    },
    {
      "id": 27,
      "front": "Data Marking/Labeling",
      "back": "Affixing human-readable classification indicators (e.g., Confidential, Private) to data and media to signify its sensitivity and protection requirements.",
      "category": "Security Operations"
    },
    {
      "id": 28,
      "front": "Data Handling",
      "back": "Defined procedures and guidelines for transporting, transmitting, and using sensitive information to ensure its protection.",
      "category": "Security Operations"
    },
    {
      "id": 29,
      "front": "Data Destruction",
      "back": "The proper and secure disposal of sensitive information and the media it resides on (e.g., shredding, degaussing) when no longer needed.",
      "category": "Security Operations"
    },
    {
      "id": 30,
      "front": "Data Retention Policy",
      "back": "A policy that defines how long specific types of data must be kept and when they can be securely destroyed, often driven by legal/regulatory requirements.",
      "category": "Security Operations"
    },
    {
      "id": 31,
      "front": "Data at Rest",
      "back": "Data that is stored on physical media such as hard drives, backup tapes, or cloud storage, awaiting access.",
      "category": "Security Operations"
    },
    {
      "id": 32,
      "front": "Data in Transit (or Data in Motion)",
      "back": "Data that is actively being transmitted over a network, such as during communication between two or more parties.",
      "category": "Security Operations"
    },
    {
      "id": 33,
      "front": "Data in Use",
      "back": "Data that is currently being processed or held in temporary storage buffers (e.g., RAM, CPU registers) by an application or system.",
      "category": "Security Operations"
    },
    {
      "id": 34,
      "front": "Physical Security Controls",
      "back": "Mechanisms like fences, security guards, access control systems (e.g., key cards), and lighting designed to protect physical assets and facilities.",
      "category": "Security Operations"
    },
    {
      "id": 35,
      "front": "Fire Suppression Systems",
      "back": "Systems (e.g., wet pipe, dry pipe, preaction, CO2, Halon substitutes) used to detect, contain, and extinguish fires based on their classification.",
      "category": "Security Operations"
    },
    {
      "id": 36,
      "front": "Personnel Safety",
      "back": "Implementing security controls and procedures that prioritize and enhance the well-being and safety of employees in all situations.",
      "category": "Security Operations"
    }
  ]
}; 