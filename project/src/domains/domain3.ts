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
  flashCards: []
}; 