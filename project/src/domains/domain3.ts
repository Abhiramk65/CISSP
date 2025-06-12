import { Domain } from './types';

export const domain3: Domain = {
  id: 3,
  name: "Security Architecture and Engineering",
  description: "Implementing and managing engineering processes using secure design principles",
  questions: [
    {
      "id": 1,
      "question": "A security architect is designing a new e-commerce platform. To ensure that users only have access to the functionalities necessary for their role, which of the following secure design principles should be prioritized?",
      "options": [
        "Defense in depth",
        "Least privilege",
        "Fail securely",
        "Keep it simple and small"
      ],
      "correctAnswer": 1,
      "explanation": "Least privilege ensures users only have access to necessary functions."
    },
    {
      "id": 2,
      "question": "During the design phase of a new application, the development team is considering potential threats. What risk analysis technique should the security architect recommend to identify exploitable security defects in the application's design?",
      "options": [
        "Risk assessment",
        "Threat modeling",
        "Vulnerability assessment",
        "Penetration testing"
      ],
      "correctAnswer": 1,
      "explanation": "Threat modeling identifies potential threats and vulnerabilities in the design."
    },
    {
      "id": 3,
      "question": "An organization is implementing a multi-tiered web application. To protect the database server, multiple layers of security controls are being considered. This approach aligns with which of the following secure design principles?",
      "options": [
        "Least privilege",
        "Keep it simple and small",
        "Fail securely",
        "Defense in depth"
      ],
      "correctAnswer": 3,
      "explanation": "Defense in depth uses multiple layers of security controls."
    },
    {
      "id": 4,
      "question": "A critical system is experiencing frequent unauthorized access attempts. To minimize the potential damage in case of a successful breach, the security team wants to ensure that even if one control fails, protection remains. This goal emphasizes which secure design principle?",
      "options": [
        "Secure defaults",
        "Least privilege",
        "Keep it simple and small",
        "Defense in depth"
      ],
      "correctAnswer": 3,
      "explanation": "Defense in depth provides redundancy in security controls."
    },
    {
      "id": 5,
      "question": "A legacy application is being migrated to a new environment. The security team wants to ensure that if an unexpected error occurs, the system does not expose sensitive data. This consideration aligns with which secure design principle?",
      "options": [
        "Secure defaults",
        "Least privilege",
        "Fail securely",
        "Keep it simple and small"
      ],
      "correctAnswer": 2,
      "explanation": "Fail securely ensures the system fails in a safe state."
    },
    {
      "id": 6,
      "question": "In a financial institution, the process for approving and disbursing payments requires involvement from multiple individuals who perform distinct tasks. This practice is an implementation of which secure design principle?",
      "options": [
        "Least privilege",
        "Segregation of duties (SoD)",
        "Keep it simple and small",
        "Fail securely"
      ],
      "correctAnswer": 1,
      "explanation": "Segregation of duties prevents a single individual from controlling all parts of a critical process."
    },
    {
      "id": 7,
      "question": "A security architect is reviewing the design of a complex system with numerous interconnected components. To make the system more manageable and easier to secure, which principle should the architect advocate for?",
      "options": [
        "Defense in depth",
        "Least privilege",
        "Fail securely",
        "Keep it simple and small"
      ],
      "correctAnswer": 3,
      "explanation": "Keeping it simple reduces complexity and potential vulnerabilities."
    },
    {
      "id": 8,
      "question": "An organization is adopting a cloud-based infrastructure. To ensure that the cloud provider does not have unilateral control over their data security, they are carefully defining responsibilities. This approach reflects which secure design principle in a cloud environment?",
      "options": [
        "Privacy by design",
        "Zero trust or trust but verify",
        "Secure access service edge (SASE)",
        "Shared responsibility"
      ],
      "correctAnswer": 3,
      "explanation": "Shared responsibility defines security obligations between the cloud provider and the customer."
    },
    {
      "id": 9,
      "question": "A new regulation requires strict control over access to sensitive customer data. The security team is designing a system where access is granted based on explicit verification at each interaction, regardless of the user's location on the network. This aligns with which security concept?",
      "options": [
        "Trust but verify",
        "Privacy by design",
        "Secure defaults",
        "Zero trust or trust but verify"
      ],
      "correctAnswer": 3,
      "explanation": "Zero trust requires verification for every access request."
    },
    {
      "id": 10,
      "question": "During the development of a customer-facing application, the team is implementing features to protect user data and comply with privacy regulations from the initial stages of design. This approach is known as:",
      "options": [
        "Security by default",
        "Defense in depth",
        "Privacy by design",
        "Least privilege"
      ],
      "correctAnswer": 2,
      "explanation": "Privacy by design integrates privacy considerations into the design process."
    },
    {
      "id": 11,
      "question": "An organization wants to formally model access rights in a system where users are assigned clearance levels (Confidential, Secret, Top Secret) and can only read data at or below their clearance and write data at or above their clearance. Which security model aligns with these requirements?",
      "options": [
        "Biba integrity model",
        "Bell-LaPadula model",
        "Clark-Wilson integrity model",
        "Discretionary Access Control (DAC)"
      ],
      "correctAnswer": 1,
      "explanation": "The Bell-LaPadula model enforces confidentiality with 'no read up, no write down'."
    },
    {
      "id": 12,
      "question": "In a system where the integrity of data is paramount, and modifications by unauthorized users or processes must be prevented, which security model primarily addresses this goal?",
      "options": [
        "Bell-LaPadula model",
        "Access Matrix Model",
        "Biba integrity model",
        "Mandatory Access Control (MAC)"
      ],
      "correctAnswer": 2,
      "explanation": "The Biba integrity model focuses on preventing unauthorized data modification."
    },
    {
      "id": 13,
      "question": "A financial system needs to ensure that transactions are well-formed and maintain both internal and external consistency. Which security model is specifically designed for commercial activities with this focus?",
      "options": [
        "Bell-LaPadula model",
        "Take-Grant model",
        "Clark-Wilson integrity model",
        "Noninterference model"
      ],
      "correctAnswer": 2,
      "explanation": "The Clark-Wilson integrity model is designed for commercial systems and well-formed transactions."
    },
    {
      "id": 14,
      "question": "An operating system enforces access rights to files based on labels assigned to both users and files by a central administrator. Users can only access files with matching or lower sensitivity labels. This is an example of which access control system?",
      "options": [
        "Discretionary Access Control (DAC)",
        "Role-Based Access Control (RBAC)",
        "Mandatory Access Control (MAC)",
        "Rule-Based Access Control"
      ],
      "correctAnswer": 2,
      "explanation": "Mandatory Access Control (MAC) uses labels and a central authority to control access."
    },
    {
      "id": 15,
      "question": "In a system where access to resources is granted based on the identity of the user and the permissions explicitly assigned to that user or groups they belong to, which access control model is in use?",
      "options": [
        "Mandatory Access Control (MAC)",
        "Discretionary Access Control (DAC)",
        "Rule-Based Access Control",
        "Attribute-Based Access Control (ABAC)"
      ],
      "correctAnswer": 1,
      "explanation": "Discretionary Access Control (DAC) allows owners to control access to their resources."
    },
    {
      "id": 16,
      "question": "An organization providing cloud services to US government agencies must select security controls based on a specific standard. Which of the following frameworks is commonly required for this scenario?",
      "options": [
        "Payment Card Industry Data Security Standard (PCI DSS)",
        "Control Objectives for Information and Related Technologies (COBIT)",
        "NIST SP800-53",
        "ISO/IEC 27002"
      ],
      "correctAnswer": 2,
      "explanation": "NIST SP800-53 provides security controls for US federal systems."
    },
    {
      "id": 17,
      "question": "An e-commerce company that processes credit card transactions needs to comply with a specific set of security requirements. Which framework is mandatory for this organization?",
      "options": [
        "NIST Cybersecurity Framework (CSF)",
        "Payment Card Industry Data Security Standard (PCI DSS)",
        "ISO/IEC 27001",
        "Center for Internet Security (CIS) Controls"
      ],
      "correctAnswer": 1,
      "explanation": "PCI DSS is mandatory for organizations that process credit card data."
    },
    {
      "id": 18,
      "question": "An organization wants to evaluate the security of a new operating system based on a standardized set of evaluation assurance levels (EALs). Which of the following provides this standard?",
      "options": [
        "Trusted Computer System Evaluation Criteria (TCSEC)",
        "Trusted Network Interpretation (TNI)",
        "European Information Technology Security Evaluation Criteria (ITSEC)",
        "Common Criteria"
      ],
      "correctAnswer": 3,
      "explanation": "Common Criteria provides Evaluation Assurance Levels (EALs) for security product evaluation."
    },
    {
      "id": 19,
      "question": "A US Department of Defense system processes classified information. The system must undergo a formal process of testing and documentation of security safeguards followed by official written approval to operate. This process is known as:",
      "options": [
        "Common Criteria evaluation",
        "System certification and accreditation",
        "Risk assessment",
        "Vulnerability assessment"
      ],
      "correctAnswer": 1,
      "explanation": "System certification and accreditation is the formal process for approving a system to operate."
    },
    {
      "id": 20,
      "question": "When selecting controls for a system that will handle financial data, the security team should prioritize controls from which of the following frameworks in addition to general security best practices?",
      "options": [
        "NIST SP800-171",
        "ISO/IEC 27005",
        "Sarbanes-Oxley Act (SOX)",
        "Sherwood Applied Business Security Architecture (SABSA)"
      ],
      "correctAnswer": 2,
      "explanation": "SOX mandates controls for financial reporting and data."
    },
    {
      "id": 21,
      "question": "To protect sensitive data stored in a computer's RAM, which security capability of information systems is crucial?",
      "options": [
        "Trusted Platform Module (TPM)",
        "Hardware Security Module (HSM)",
        "Memory protection",
        "Trusted Computing Base (TCB)"
      ],
      "correctAnswer": 2,
      "explanation": "Memory protection prevents unauthorized access to data in RAM."
    },
    {
      "id": 22,
      "question": "The part of a computer system, including hardware, firmware, and software, responsible for enforcing the security policy is known as the:",
      "options": [
        "Reference monitor",
        "Security kernel",
        "Trusted Platform Module (TPM)",
        "Trusted Computing Base (TCB)"
      ],
      "correctAnswer": 3,
      "explanation": "The Trusted Computing Base (TCB) is the core of a system's security."
    },
    {
      "id": 23,
      "question": "To securely store cryptographic keys used by an application, a dedicated hardware device designed for this purpose should be used. This device is called a:",
      "options": [
        "Trusted Platform Module (TPM)",
        "Trusted Computing Base (TCB)",
        "Hardware Security Module (HSM)",
        "Security kernel"
      ],
      "correctAnswer": 2,
      "explanation": "A Hardware Security Module (HSM) securely stores cryptographic keys."
    },
    {
      "id": 24,
      "question": "In a high-security environment, a system is configured such that all authorized users must have a clearance level equal to or higher than the highest level of information processed on the system, and a valid need to know for the specific data they access. This security mode of operation is known as:",
      "options": [
        "System High",
        "Multilevel",
        "Limited access",
        "Dedicated"
      ],
      "correctAnswer": 3,
      "explanation": "Dedicated mode requires users to have clearance for all information on the system."
    },
    {
      "id": 25,
      "question": "A system designed with multiple layers of security controls, where the failure of one control does not necessarily lead to a compromise, demonstrates:",
      "options": [
        "Least privilege",
        "Secure defaults",
        "Resilience",
        "Fail securely"
      ],
      "correctAnswer": 2,
      "explanation": "Resilience is the ability to withstand failures and maintain operation."
    },
    {
      "id": 26,
      "question": "A web server is found to be exposing the version of the underlying operating system in its HTTP headers. This information can be used by attackers for reconnaissance. Which security principle aims to prevent revealing unnecessary details about the system?",
      "options": [
        "Least privilege",
        "Revealing as little information about the system as possible",
        "Defense in depth",
        "Keep it simple and small"
      ],
      "correctAnswer": 1,
      "explanation": "Revealing as little information as possible limits potential attacker knowledge."
    },
    {
      "id": 27,
      "question": "An attacker intercepts encrypted communication between two parties. The attacker tries every possible key combination to decrypt the data. This type of cryptanalytic attack is known as:",
      "options": [
        "Ciphertext only",
        "Known plaintext",
        "Brute force",
        "Chosen ciphertext"
      ],
      "correctAnswer": 2,
      "explanation": "Brute force tries every possible key."
    },
    {
      "id": 28,
      "question": "A cryptanalyst obtains the ciphertext of several messages and also manages to acquire the corresponding plaintext for some of these messages. Which type of cryptanalytic attack is the analyst likely to employ?",
      "options": [
        "Ciphertext only",
        "Known plaintext",
        "Chosen plaintext",
        "Brute force"
      ],
      "correctAnswer": 1,
      "explanation": "Known plaintext uses both ciphertext and corresponding plaintext."
    },
    {
      "id": 29,
      "question": "An attacker tricks a user into encrypting plaintext of the attacker's choice and obtains the resulting ciphertext. The attacker uses this information to deduce the encryption key. This is an example of which cryptanalytic attack?",
      "options": [
        "Known plaintext",
        "Ciphertext only",
        "Chosen plaintext",
        "Brute force"
      ],
      "correctAnswer": 2,
      "explanation": "Chosen plaintext involves the attacker choosing the plaintext to be encrypted."
    },
    {
      "id": 30,
      "question": "An attacker intercepts ciphertext and then submits different ciphertext samples to the decryption function, analyzing the resulting plaintext to gain information about the key. This is an example of which cryptanalytic attack?",
      "options": [
        "Known plaintext",
        "Ciphertext only",
        "Chosen ciphertext",
        "Brute force"
      ],
      "correctAnswer": 2,
      "explanation": "Chosen ciphertext involves the attacker choosing the ciphertext to be decrypted."
    },
    {
      "id": 31,
      "question": "An attacker observes the power consumption of a cryptographic device during encryption operations to try and deduce the secret key. This is a type of:",
      "options": [
        "Implementation attack",
        "Fault injection",
        "Side channel attack",
        "Timing attack"
      ],
      "correctAnswer": 2,
      "explanation": "Side channel attacks exploit auxiliary information like power consumption."
    },
    {
      "id": 32,
      "question": "An attacker introduces errors into a cryptographic process to cause the system to malfunction and reveal sensitive information. This is known as:",
      "options": [
        "Side channel attack",
        "Fault injection",
        "Timing attack",
        "Implementation attack"
      ],
      "correctAnswer": 1,
      "explanation": "Fault injection introduces errors to disrupt the system."
    },
    {
      "id": 33,
      "question": "An attacker intercepts an authentication session key and reuses it later to gain unauthorized access. This is a:",
      "options": [
        "Man in the middle attack",
        "Pass the hash attack",
        "Timing (or replay) attack",
        "Kerberos exploitation"
      ],
      "correctAnswer": 2,
      "explanation": "Replay attacks reuse captured data, like session keys."
    },
    {
      "id": 34,
      "question": "An attacker intercepts communication between a client and a server and secretly relays and potentially alters the communication between the two parties. This is a:",
      "options": [
        "Replay attack",
        "Pass the hash attack",
        "Kerberos exploitation",
        "Man in the middle attack"
      ],
      "correctAnswer": 3,
      "explanation": "Man-in-the-middle attacks intercept and potentially modify communications."
    },
    {
      "id": 35,
      "question": "To prevent unauthorized physical access to a data center, which of the following security principles should be applied in the site design?",
      "options": [
        "Defense in depth",
        "Least privilege",
        "Crime Prevention through Environmental Design (CPTED)",
        "Secure defaults"
      ],
      "correctAnswer": 2,
      "explanation": "CPTED uses design to deter crime."
    },
    {
      "id": 36,
      "question": "When selecting a location for a new server room, which of the following physical security considerations should be prioritized to mitigate risks from natural disasters?",
      "options": [
        "Proximity to public transportation",
        "Climatology and natural disasters",
        "Accessibility for IT personnel",
        "Availability of joint tenants"
      ],
      "correctAnswer": 1,
      "explanation": "Climatology and natural disaster analysis is crucial for site selection."
    },
    {
      "id": 37,
      "question": "To deter casual trespassers from a facility's perimeter, which of the following physical security controls is typically the first line of defense?",
      "options": [
        "Security guards",
        "Video surveillance",
        "Fencing",
        "Lighting"
      ],
      "correctAnswer": 2,
      "explanation": "Fencing is a primary perimeter control."
    },
    {
      "id": 38,
      "question": "In a high-security area, a set of interlocking doors requires one door to close and lock before the other door can be opened. This physical security control is known as a:",
      "options": [
        "Turnstile",
        "Security guard checkpoint",
        "Mantraps",
        "Bollard"
      ],
      "correctAnswer": 2,
      "explanation": "Mantraps are interlocking doors."
    },
    {
      "id": 39,
      "question": "To protect IT equipment in a server room from fire damage without using water, which type of fire suppression system is most suitable?",
      "options": [
        "Wet pipe sprinkler",
        "Dry pipe sprinkler",
        "Deluge system",
        "Inert gas fire suppression"
      ],
      "correctAnswer": 3,
      "explanation": "Inert gas systems suppress fire without water."
    },
    {
      "id": 40,
      "question": "To ensure a continuous and clean power supply for critical servers in a data center, which of the following should be implemented?",
      "options": [
        "Surge protectors only",
        "Electric generators only",
        "Uninterruptible Power Supply (UPS) and electric generators",
        "Standard electrical outlets"
      ],
      "correctAnswer": 2,
      "explanation": "UPS and generators provide backup and clean power."
    },
    {
      "id": 41,
      "question": "Which phase of the information system lifecycle involves defining the high-level description of the software or system deliverable?",
      "options": [
        "Design",
        "Inception",
        "Development/Implementation",
        "Maintenance"
      ],
      "correctAnswer": 1,
      "explanation": "Inception defines the project scope and high-level goals."
    },
    {
      "id": 42,
      "question": "During the requirements analysis phase of the information system lifecycle, what is a critical security activity?",
      "options": [
        "Developing the detailed system architecture",
        "Writing the source code",
        "Including security, privacy, and regulatory requirements",
        "Deploying the system to production"
      ],
      "correctAnswer": 2,
      "explanation": "Requirements analysis includes identifying security and privacy needs."
    },
    {
      "id": 43,
      "question": "Which phase of the information system lifecycle involves creating entity-relationship diagrams and data-flow diagrams?",
      "options": [
        "Requirements analysis",
        "Architectural design",
        "Development/Implementation",
        "Testing"
      ],
      "correctAnswer": 1,
      "explanation": "Architectural design involves creating system diagrams and models."
    },
    {
      "id": 44,
      "question": "During the development and implementation phase of the information system lifecycle, what is a key security practice?",
      "options": [
        "Defining functional requirements",
        "Configuring operating systems and subsystems securely",
        "Conducting user acceptance testing",
        "Planning for system retirement"
      ],
      "correctAnswer": 1,
      "explanation": "Secure configuration is a key part of the development phase."
    },
    {
      "id": 45,
      "question": "Which phase of the information system lifecycle focuses on ensuring that all components of the system work together correctly?",
      "options": [
        "Verification and validation",
        "Architectural design",
        "Integration",
        "Transition/deployment"
      ],
      "correctAnswer": 2,
      "explanation": "Integration ensures that system components work together."
    },
    {
      "id": 46,
      "question": "What is the primary security objective of the verification and validation phase of the information system lifecycle?",
      "options": [
        "To write the source code for the system",
        "To deploy the system to the production environment",
        "To confirm that each requirement developed earlier has been achieved",
        "To plan for the retirement of the system"
      ],
      "correctAnswer": 2,
      "explanation": "Verification and validation confirm that the system meets the requirements."
    },
    {
      "id": 47,
      "question": "Which phase of the information system lifecycle involves moving the developed system into the operational environment?",
      "options": [
        "Verification and validation",
        "Architectural design",
        "Development/Implementation",
        "Transition/deployment"
      ],
      "correctAnswer": 3,
      "explanation": "Transition/deployment moves the system into production."
    },
    {
      "id": 48,
      "question": "After a system is in production, ongoing efforts to manage and control changes to the software and infrastructure fall under:",
      "options": [
        "The inception phase",
        "The transition phase",
        "The operations and maintenance/sustainment phase",
        "The retirement/disposal phase"
      ],
      "correctAnswer": 2,
      "explanation": "Operations and maintenance involve ongoing system management."
    },
    {
      "id": 49,
      "question": "When a system reaches the end of its useful life, the process of decommissioning it securely without exposing data or other systems to risk is part of which phase of the information system lifecycle?",
      "options": [
        "Operations and maintenance",
        "Verification and validation",
        "Transition/deployment",
        "Retirement/disposal"
      ],
      "correctAnswer": 3,
      "explanation": "Retirement/disposal involves secure system decommissioning."
    },
    {
      "id": 50,
      "question": "In an Agile software development methodology, security should be integrated:",
      "options": [
        "Only during the testing phase",
        "Primarily during the design phase",
        "Throughout the entire software development life cycle",
        "As a final step before deployment"
      ],
      "correctAnswer": 2,
      "explanation": "Agile emphasizes integrating security throughout the development lifecycle."
    }
  ],
  flashCards: [
    {
      "id": 1,
      "front": "Security Architecture and Engineering Domain Overview",
      "back": "The **Security Architecture and Engineering** domain concentrates on the development of information systems that remain secure when confronted with a multitude of threats. It encompasses various topics, including secure design principles, security models, the selection of effective controls, cryptography, and physical security. This domain represents 13 percent of the CISSP certification exam.",
      "category": "Security Architecture"
    },
    {
      "id": 2,
      "front": "Secure Design Principles (General)",
      "back": "**Secure design principles** highlight the importance of embedding security considerations early in the engineering process of a hardware or software project. Building security into a system from its inception is significantly easier and more cost-effective than attempting to add security to an existing system after it has been developed and deployed. These principles guide the fundamental approach to system design, ensuring security is a core component, not an afterthought.",
      "category": "Secure Design"
    },
    {
      "id": 3,
      "front": "Threat Modeling (Purpose)",
      "back": "**Threat modeling** is a crucial risk analysis technique employed to identify exploitable security defects during the design phase of information systems, applications, business processes, or even physical facilities. It is primarily an attack-centric approach, focusing on potential vulnerabilities that an attacker could successfully exploit. By identifying and mitigating threats early in the design stage, organizations can avoid more complex and expensive fixes later in the system's life cycle. Threat modeling can be performed proactively during design and development or reactively after deployment.",
      "category": "Threat Management"
    },
    {
      "id": 4,
      "front": "STRIDE Threat Categories",
      "back": "**STRIDE** is a mnemonic, developed by Microsoft, commonly used as a memory aid during threat modeling, especially for software applications, to list basic threat categories. These categories guide the identification of potential threats:\n•\n**S**poofing of user identity\n•\n**T**ampering\n•\n**R**epudiation\n•\n**I**nformation disclosure\n•\n**D**enial of service (DoS)\n•\n**E**levation of privilege",
      "category": "Threat Management"
    },
    {
      "id": 5,
      "front": "DREAD Threat Assessment Model",
      "back": "The **DREAD rating system** is an older technique for assessing threats by providing a flexible rating solution based on the answers to five main questions about each threat. Assigning values (e.g., High/Medium/Low or numerical values) to these answers allows for detailed threat prioritization:\n•\n**D**amage potential: How severe is the damage likely to be if the threat is realized?\n•\n**R**eproducibility: How complicated is it for attackers to reproduce the exploit?\n•\n**E**xploitability: How hard is it to perform the attack?\n•\n**A**ffected users: How many users are likely to be affected by the attack (as a percentage)?\n•\n**D**iscoverability: How hard is it for an attacker to discover the weakness?",
      "category": "Threat Management"
    },
    {
      "id": 6,
      "front": "Defense in Depth",
      "back": "**Defense in depth** is a fundamental security strategy that involves implementing multiple, overlapping layers of security controls. The core idea is that if one security control or mechanism fails or is bypassed, subsequent layers will still provide protection, thereby reducing the likelihood of a successful attack. This approach applies to various aspects of security, including physical, technical, and administrative controls.",
      "category": "Security Principles"
    },
    {
      "id": 7,
      "front": "System Hardening",
      "back": "**System hardening** refers to the practice of making a system or device more resistant to attack and abuse through its architecture, design, and configuration. This process typically involves reducing the attack surface by eliminating unnecessary services, closing unused network ports, applying security patches, and configuring systems according to security baselines and best practices. Software and operating system vendors often provide their own hardening guides.",
      "category": "System Security"
    },
    {
      "id": 8,
      "front": "Security Models (Purpose)",
      "back": "**Security models** are theoretical or mathematical frameworks used to understand and formalize complex security mechanisms in information systems. They precisely describe or quantify real access control systems and can be used to analyze existing systems or design new ones. These models often illustrate how access control requirements are enforced to protect confidentiality, integrity, or availability.",
      "category": "Security Models"
    },
    {
      "id": 9,
      "front": "Bell-LaPadula Model",
      "back": "The **Bell-LaPadula model** is a state machine model primarily focused on confidentiality. It ensures that information only flows in a way that does not violate the system's confidentiality policy. The two main rules are:\n•\n**Simple Security Rule (No Read Up)**: A subject at a given security level cannot read data that resides at a higher security level.\n•\n***-Property Rule (No Write Down)**: A subject at a given security level cannot write data to a lower security level. This prevents sensitive information from being \"leaked\" to less protected areas.",
      "category": "Security Models"
    },
    {
      "id": 10,
      "front": "Biba Model",
      "back": "The **Biba model** is the first formal integrity model, focused on preventing unauthorized modification of data. It aims to ensure that modifications to data are made only by authorized users or processes. The two main rules are:\n•\n**Simple Integrity Property (No Read Down)**: A subject at a given integrity level cannot read data at a lower integrity level.\n•\n***-Integrity Property (No Write Up)**: A subject at a given integrity level cannot write data to a higher integrity level. This prevents a \"dirty\" (low-integrity) subject from contaminating \"clean\" (high-integrity) data.",
      "category": "Security Models"
    },
    {
      "id": 11,
      "front": "Clark-Wilson Model",
      "back": "The **Clark-Wilson model** is an integrity-focused security model that emphasizes well-formed transactions and the separation of duties. It uses auditing to ensure that unauthorized subjects cannot access objects and that authorized users access objects properly. Key concepts include:\n•\n**Constrained Data Items (CDI)**: Data that must have its integrity preserved.\n•\n**Transformation Procedures (TP)**: Programs that change the state of CDIs, ensuring that data changes are performed in a controlled manner.\n•\n**Integrity Verification Procedures (IVP)**: Procedures that scan data items and ensure their integrity.",
      "category": "Security Models"
    },
    {
      "id": 12,
      "front": "Data States (At Rest, In Transit, In Use)",
      "back": "Data security controls are often applied based on the state of the data. There are three common data states:\n•\n**Data at Rest (Stored Data)**: Refers to data residing in a permanent location awaiting access, such as on hard drives, backup tapes, or cloud storage. Protection often involves encryption (e.g., whole disk encryption).\n•\n**Data in Transit (Data in Motion/On the Wire/In Flight)**: Refers to data being transmitted between parties over a network medium. Protection typically involves encryption protocols like IPSec, TLS, PPTP, or SSH.\n•\n**Data in Use**: Refers to data actively being processed, manipulated, or accessed by a computer system's CPU and memory. It is implicitly protected by general security concepts like memory protection and process isolation, and must be accessed only on authorized systems with appropriate permissions.",
      "category": "Data Security"
    },
    {
      "id": 13,
      "front": "Symmetric Key Cryptography",
      "back": "**Symmetric key cryptography** (also known as secret key cryptography) is a cryptographic method that uses a single, shared secret key for both encryption and decryption. Both the sender and the receiver must possess this identical key, which makes key distribution a challenge. Common symmetric algorithms include AES (Advanced Encryption Standard), which replaced DES, and 3DES (Triple DES). Symmetric ciphers are generally faster for bulk data encryption compared to asymmetric ciphers.",
      "category": "Cryptography"
    },
    {
      "id": 14,
      "front": "Asymmetric Key Cryptography (Public Key Cryptography)",
      "back": "**Asymmetric key cryptography** (also known as public key cryptography) employs a pair of mathematically related keys: a public key and a private key. The public key can be freely shared with anyone, while the private key must be kept secret and only known to its owner. This method is used for:\n•\n**Confidentiality**: Encrypting data with the recipient's public key, which can only be decrypted with their private key.\n•\n**Digital Signatures**: The sender signs data with their private key, and anyone can verify the signature using the sender's public key, providing nonrepudiation and integrity. Common algorithms include RSA, El Gamal, and Elliptic Curve Cryptosystem (ECC).",
      "category": "Cryptography"
    },
    {
      "id": 15,
      "front": "Public Key Infrastructure (PKI)",
      "back": "A **Public Key Infrastructure (PKI)** is a comprehensive framework that integrates programs, data formats, procedures, communication protocols, security policies, and cryptosystems. Its primary purpose is to establish and maintain a high level of trust within an environment to enable secure and predictable communication among dispersed entities. A PKI is often described as a hybrid system because it leverages both symmetric (for bulk data encryption) and asymmetric (for key exchange and digital signatures) cryptography to provide confidentiality, integrity, nonrepudiation, authentication, and sometimes authorization.",
      "category": "Cryptography"
    },
    {
      "id": 16,
      "front": "Digital Signatures",
      "back": "A **digital signature** is a cryptographic mechanism used to provide nonrepudiation and integrity for electronic documents and messages. It is created by the sender using their private key to encrypt a cryptographic hash (message digest) of the message. The recipient can then use the sender's publicly available public key to verify the signature, thus confirming the sender's identity and assuring that the message has not been altered since it was signed.",
      "category": "Cryptography"
    },
    {
      "id": 17,
      "front": "Key Management",
      "back": "**Key management** refers to the comprehensive set of practices and procedures involved in handling cryptographic keys throughout their entire lifecycle. This includes crucial phases such as:\n•\n**Key Generation**: Creating strong, random keys.\n•\n**Key Installation**: Implementing keys into cryptographic systems.\n•\n**Key Storage**: Securely storing keys, often on protected or encrypted media or in a key vault.\n•\n**Key Change/Rotation**: Regularly updating keys to reduce the risk of compromise, especially for frequently used keys.\n•\n**Key Revocation/Destruction**: Securely invalidating and destroying keys when they are no longer needed or have been compromised.\n•\n**Key Escrow/Recovery**: Storing keys with a third party or having a recovery mechanism in case keys are lost.",
      "category": "Cryptography"
    },
    {
      "id": 18,
      "front": "Cryptanalytic Attacks (General)",
      "back": "**Cryptanalytic attacks** are methods attackers use to attempt to crack or compromise cryptosystems. These attacks exploit weaknesses in cryptographic algorithms, protocols, or implementations to reveal plaintext, decipher keys, or forge signatures. Examples include:\n•\n**Brute-Force Attack**: Trying every possible key until the correct one is found.\n•\n**Frequency Analysis**: Analyzing the frequency of characters or blocks in ciphertext to infer patterns and potentially break substitution ciphers.\n•\n**Known-Plaintext Attack**: The attacker has access to both the plaintext and its corresponding ciphertext.\n•\n**Timing Attack**: Analyzing the time taken by cryptographic operations to reveal secret information.\n•\n**Man-in-the-Middle (MitM) Attack**: The attacker intercepts communication between two parties and impersonates each party to the other, potentially decrypting, reading, and re-encrypting messages.\n•\n**Ransomware**: Although a form of malware, it leverages encryption as an attack weapon, encrypting data on a system and demanding a ransom for its recovery.",
      "category": "Cryptography"
    },
    {
      "id": 19,
      "front": "Physical Security (Overall Importance)",
      "back": "**Physical security** focuses on protecting tangible assets, including people, facilities, equipment, and information assets (e.g., hard drives, paper documents) from unauthorized access, damage, theft, and environmental hazards. It is considered a foundational element of a comprehensive security strategy because a failure in physical security can render logical and technical controls ineffective. The protection of human life and safety is always the highest priority in physical security, trumping all other concerns.",
      "category": "Physical Security"
    },
    {
      "id": 20,
      "front": "Crime Prevention Through Environmental Design (CPTED)",
      "back": "**CPTED** is a multi-disciplinary approach to deterring criminal behavior through the design of physical environments. Published in 1971, CPTED principles aim to create a safer environment by influencing human behavior, both for potential offenders and legitimate users. Key strategies include:\n•\n**Natural Access Control**: Guiding people using physical design to prevent unauthorized entry or restrict access to specific areas.\n•\n**Natural Surveillance**: Designing spaces to maximize visibility and make criminal activity easily observable.\n•\n**Territorial Reinforcement**: Creating a sense of ownership over a space, encouraging legitimate users to challenge or report unusual activities.\n•\n**Maintenance**: Ensuring the environment is well-maintained to show a high level of care and discourage neglect and crime.",
      "category": "Physical Security"
    },
    {
      "id": 21,
      "front": "Physical Access Controls",
      "back": "**Physical access controls** are mechanisms and procedures designed to regulate and restrict entry to facilities, sensitive areas, and individual assets. These controls can be implemented in layers, for example:\n•\n**Perimeter Security**: Fences, gates, walls, lighting, and security guards to define and protect the outer boundary of a facility.\n•\n**Building Access Controls**: Locks (mechanical and electronic), key cards, PIN pads, and biometric readers at building entrances and critical internal doors to control who can enter and when.\n•\n**Internal Security**: Restricted access to server rooms, data centers, and wiring closets, often with stricter controls like multifactor authentication, video surveillance, and intrusion detection systems.\n•\n**Visitor Control**: Implementing procedures like visitor logs, requiring proof of ID, issuing temporary badges, and requiring escorts for visitors in restricted areas.",
      "category": "Physical Security"
    },
    {
      "id": 22,
      "front": "Fire Suppression Systems",
      "back": "**Fire suppression systems** are critical for protecting facilities and assets from fire damage. They operate by removing one or more elements of the \"fire triangle\" (fuel, heat, oxygen) or interrupting the chemical reaction. Different types of fires (classified by fuel type) require specific suppression agents:\n•\n**Class A (Ordinary Combustibles)**: Water, soda acid, dry powder.\n•\n**Class B (Flammable Liquids/Gases)**: CO2, soda acid, dry powder.\n•\n**Class C (Electrical Equipment)**: CO2, dry chemical, or by cutting power (most important first step).\n•\n**Class D (Combustible Metals)**: Dry powder, special techniques.\n•\n**Class K/F (Cooking Oils/Fats)**: Wet chemical, water mist, fire blankets. Halon is an effective fire suppression agent that removes oxygen, but its use is restricted due to environmental concerns, and it is not typically used in new installations.",
      "category": "Physical Security"
    },
    {
      "id": 23,
      "front": "Power Systems (UPS, Redundancy)",
      "back": "Clean and continuous electrical power is essential for the operation of IT hardware and services. Critical power components include:\n•\n**Uninterruptible Power Supplies (UPSs)**: Provide immediate, temporary backup power during short outages or until a primary power source (like a generator) can take over. They protect against power fluctuations, sags, and spikes.\n•\n**Redundant Power Supplies**: Implementing multiple, independent power feeds (e.g., from different grids or transformers) to a facility or critical system to ensure continuous power even if one source fails.\n•\n**Backup Generators**: Provide long-term power during extended outages, typically fueled by diesel or natural gas. There is usually a brief delay between a power loss and a generator coming online, which is bridged by the UPS.\n•\n**Power Conditioners/Surge Protectors**: Protect equipment from voltage fluctuations, spikes, and noise, though simple surge protectors offer only minimal protection.",
      "category": "Physical Security"
    },
    {
      "id": 24,
      "front": "Memory Protection",
      "back": "**Memory protection mechanisms** are security capabilities of information systems designed to prevent processes from interfering with each other's memory spaces. Key concepts include:\n•\n**Confinement**: Restricting a process to reading from and writing to specific, authorized memory locations.\n•\n**Bounds**: Defining the limits of memory that a process cannot exceed when reading or writing.\n•\n**Isolation**: The mode in which a process runs when it is confined through the use of memory bounds, ensuring that processes are separated and cannot access or modify each other's data unintentionally or maliciously. These mechanisms are crucial for maintaining the integrity and confidentiality of data in use.",
      "category": "System Security"
    },
    {
      "id": 25,
      "front": "Trusted Computing Base (TCB)",
      "back": "The **Trusted Computing Base (TCB)** refers to the collection of all hardware, software, and firmware components within a system that are critical to enforcing a security policy. It includes elements like the operating system kernel, device drivers, and other privileged components. The TCB is the \"root of trust\" in a system; if any part of the TCB is compromised, the entire system's security cannot be guaranteed. A smaller and simpler TCB is generally preferred, as it reduces the attack surface and makes it easier to verify its correctness.",
      "category": "System Security"
    },
    {
      "id": 26,
      "front": "Trusted Platform Module (TPM)",
      "back": "A **Trusted Platform Module (TPM)** is a hardware-based security chip (microcontroller) that is typically integrated into a computer's motherboard. It stores cryptographic keys and provides security services, primarily related to platform integrity and authentication. The TPM can perform functions such as:\n•\nGenerating and securely storing cryptographic keys.\n•\nMeasuring and reporting changes to the system's boot configuration (attestation), ensuring the integrity of the boot process.\n•\nSupporting disk encryption (e.g., BitLocker) by securely storing encryption keys. The TPM helps establish a higher level of trust in the computing platform.",
      "category": "System Security"
    },
    {
      "id": 27,
      "front": "Protection Rings",
      "back": "**Protection rings** are a hierarchical security architecture concept used to segregate operating system components and applications into different privilege levels. The rings are concentric circles, with the innermost ring having the highest privilege:\n•\n**Ring 0 (Kernel Mode)**: The innermost ring, with the highest privilege, occupied by the operating system kernel and core memory components. It can access any resource.\n•\n**Ring 1 (Other OS Components)**: Contains other operating system parts that are not always resident in memory.\n•\n**Ring 2 (I/O Drivers & Utilities)**: Holds device drivers and system utilities that can access peripheral devices.\n•\n**Ring 3 (User Mode)**: The outermost ring, with the lowest privilege, where user-level applications and programs run. Rings 0-2 typically run in supervisory or privileged mode, while Ring 3 runs in user mode. This segregation helps enforce the principle of least privilege and provides isolation.",
      "category": "System Security"
    },
    {
      "id": 28,
      "front": "Secure Software Development Life Cycle (SSDLC)",
      "back": "The **Secure Software Development Life Cycle (SSDLC)** integrates security activities and considerations into every phase of the traditional software development life cycle (SDLC). Rather than treating security as an afterthought, SSDLC ensures that security is designed, implemented, tested, and maintained throughout the software's entire existence. This proactive approach helps to identify and mitigate vulnerabilities early, reducing the cost and effort of remediation later. Key aspects include security requirements definition, secure coding guidelines, security testing, and secure deployment.",
      "category": "Software Security"
    },
    {
      "id": 29,
      "front": "Input Validation",
      "back": "**Input validation** is a critical security control implemented in software development to ensure that data received from external sources (e.g., user input, network packets, file uploads) conforms to expected formats, types, and ranges. Its purpose is to prevent security vulnerabilities such as:\n•\n**Buffer Overflows**: By checking input length to prevent data from exceeding allocated memory buffers.\n•\n**Injection Attacks**: By sanitizing or rejecting input that contains malicious code (e.g., SQL injection, cross-site scripting (XSS)).\n•\n**Data Corruption**: By ensuring that data adheres to business rules and data types, thus maintaining data integrity. Proper input validation is a foundational element of secure coding.",
      "category": "Software Security"
    },
    {
      "id": 30,
      "front": "OWASP (Open Web Application Security Project)",
      "back": "**OWASP (Open Web Application Security Project)** is a non-profit foundation dedicated to improving software security, particularly for web applications. It provides free, community-driven resources and guidance to help organizations develop, deploy, and maintain secure applications. Key contributions from OWASP include:\n•\n**OWASP Top 10**: A regularly updated list of the most critical web application security risks, serving as a foundational awareness document.\n•\n**Secure Coding Practices**: Guidelines, tools, and methodologies for developers to build more secure software.\n•\n**Testing Guides**: Resources for security professionals to assess application vulnerabilities. OWASP emphasizes that removing risks makes software applications more robust, reliable, and secure.",
      "category": "Software Security"
    },
    {
      "id": 31,
      "front": "Security-Minded Acquisitions",
      "back": "**Security-minded acquisitions** involve integrating cybersecurity risk management into an organization's acquisition strategies and practices. This ensures that hardware, software, and services procured from vendors and third parties do not introduce unacceptable security risks. Key considerations include:\n•\n**Minimum Security Requirements**: Defining and enforcing baseline security standards for all acquired products and services.\n•\n**Service-Level Requirements**: Specifying security-related performance expectations and penalties for external service providers in contracts (SLAs).\n•\n**Third-Party Assessment and Monitoring**: Conducting due diligence (e.g., on-site assessments, document reviews) of vendors' security posture and capabilities before and during the engagement. This also includes understanding \"fourth-party risk\" (risks introduced by a third party's own third parties).",
      "category": "Acquisition Security"
    }
  ]
}; 