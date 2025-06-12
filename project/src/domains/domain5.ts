import { Domain } from './types';

export const domain5: Domain = {
  id: 5,
  name: "Identity and Access Management",
  description: "Controlling physical and logical access to assets, information, and systems",
  questions: [
    {
      "id": 1,
      "question": "An organization is implementing a new file server to store sensitive project data. Which of the following is the primary logical control that should be configured to restrict access to authorized project team members only?",
      "options": [
          "Physical security controls around the server room.",
          "Network segmentation to isolate the server.",
          "File and directory-level permissions managed at the operating system level",
          "Installation of anti-malware software on the server."
      ],
      "correctAnswer": 2,
      "explanation": "File and directory permissions are the primary logical control for restricting access to specific data."
  },
  {
      "id": 2,
      "question": "A company wants to control physical access to its research and development facility. Which of the following would be the MOST effective measure to prevent unauthorized entry while also recording access attempts?",
      "options": [
          "Security guards stationed at the entrance.",
          "Key card access systems with optional biometric readers and PIN pads",
          "Standard door locks with key control procedures.",
          "Visitor logs maintained at the reception desk."
      ],
      "correctAnswer": 1,
      "explanation": "Key card systems with biometric readers and PIN pads provide strong access control and audit trails."
  },
  {
      "id": 3,
      "question": "To enhance the security of a web application, the security team decides to implement multifactor authentication (MFA). Which of the following scenarios BEST exemplifies MFA?",
      "options": [
          "A user enters a strong password that meets complexity requirements.",
          "A user authenticates using a biometric scan of their fingerprint.",
          "A user enters their password and then provides a time-based one-time password from an authenticator app.",
          "A user’s login is restricted to specific working hours."
      ],
      "correctAnswer": 2,
      "explanation": "MFA requires multiple authentication factors, such as a password and a time-based one-time password."
  },
  {
      "id": 4,
      "question": "An organization is considering adopting a cloud-based Software as a Service (SaaS) application. Who is typically responsible for managing user access and permissions within this application environment?",
      "options": [
          "The cloud service provider.",
          "The network security team of the organization.",
          "The customer (the organization adopting the SaaS application)",
          "A third-party security consultant hired by the cloud provider."
      ],
      "correctAnswer": 2,
      "explanation": "In a SaaS model, the customer is responsible for managing user access."
  },
  {
      "id": 5,
      "question": "A new employee joins the finance department, requiring access to various financial systems. According to the principle of least privilege, what is the MOST appropriate way to grant initial access?",
      "options": [
          "Grant the employee full administrator rights to all financial systems for ease of use.",
          "Provide the employee with the same access as a senior member of the finance team.",
          "Assign the employee to relevant built-in and custom groups and roles within the IAM system based on their specific job responsibilities.",
          "Grant the employee read access to all systems initially, and then add permissions as requested."
      ],
      "correctAnswer": 2,
      "explanation": "Least privilege dictates assigning only the necessary access based on job responsibilities."
  },
  {
      "id": 6,
      "question": "Which of the following authentication factors relies on something you are?",
      "options": ["A password.", "A security token.", "A fingerprint scan.", "A personal identification number (PIN)."],
      "correctAnswer": 2,
      "explanation": "A fingerprint scan is a biometric factor, representing 'something you are'."
  },
  {
      "id": 7,
      "question": "An organization wants to implement a system where employees can use a single set of credentials to access multiple internal and external applications. Which of the following technologies BEST supports this requirement?",
      "options": ["RADIUS.", "TACACS+.", "Single sign-on (SSO).", "Kerberos."],
      "correctAnswer": 2,
      "explanation": "SSO allows users to authenticate once and access multiple applications."
  },
  {
      "id": 8,
      "question": "After a successful penetration test, it was discovered that several service accounts had weak default passwords. What is the BEST practice to improve the security of service accounts?",
      "options": [
          "Mandate regular password changes by the application owners.",
          "Implement multifactor authentication for all service accounts.",
          "Randomly generate strong passwords with maximum allowable complexity and store them in a credential management system.",
          "Limit the number of service accounts used within the environment."
      ],
      "correctAnswer": 2,
      "explanation": "Strong, randomly generated passwords stored in a secure system are best for service accounts."
  },
  {
      "id": 9,
      "question": "A company is federating its identity management with a partner organization to allow seamless access for joint project team members. Which of the following is a common technology used to facilitate this federated identity management (FIM)?",
      "options": ["LDAP.", "Active Directory.", "Security Assertion Markup Language (SAML).", "RADIUS."],
      "correctAnswer": 2,
      "explanation": "SAML is commonly used for federated identity management."
  },
  {
      "id": 10,
      "question": "Which access control model is controlled by a central administrator who determines access rights to objects, and the operating system enforces these rights?",
      "options": [
          "Discretionary Access Control (DAC).",
          "Role-Based Access Control (RBAC).",
          "Mandatory Access Control (MAC)",
          "Attribute-Based Access Control (ABAC)."
      ],
      "correctAnswer": 2,
      "explanation": "MAC is a centralized model where a central authority determines access rights."
  },
  {
      "id": 11,
      "question": "An employee transfers to a different department with new job responsibilities. What is the MOST important step to take regarding their system access in their previous role?",
      "options": [
          "Keep the access active for a transition period.",
          "Document the transfer and retain all previous access rights.",
          "Deprovision the user's account from systems and applications no longer required based on their new role.",
          "Notify the employee's previous manager about the transfer."
      ],
      "correctAnswer": 2,
      "explanation": "Deprovisioning removes unnecessary access when roles change."
  },
  {
      "id": 12,
      "question": "An organization wants to implement a time-sensitive access mechanism for administrators who occasionally require elevated privileges to perform specific tasks. Which of the following BEST describes this approach?",
      "options": [
          "Role-based access control with permanent administrator roles.",
          "Rule-based access control based on administrator IP addresses.",
          "Just-in-time (JIT) access providing temporary, granular access only when needed.",
          "Discretionary access control granted by system owners upon request."
      ],
      "correctAnswer": 2,
      "explanation": "JIT access grants temporary privileges when needed."
  },
  {
      "id": 13,
      "question": "Which of the following BEST describes the purpose of an account access review?",
      "options": [
          "To monitor user activity and detect suspicious behavior.",
          "To ensure that users are adhering to password complexity requirements.",
          "To regularly verify that user and system accounts and their assigned privileges are still appropriate.",
          "To identify and remove inactive user accounts from the system."
      ],
      "correctAnswer": 2,
      "explanation": "Account access reviews verify the appropriateness of user privileges."
  },
  {
      "id": 14,
      "question": "A user attempts to log in to their workstation after several unsuccessful attempts and finds their account locked. This is an example of which security control?",
      "options": [
          "Minimum password aging.",
          "Password reuse control.",
          "Lockout duration (intruder lockout).",
          "Maximum password aging."
      ],
      "correctAnswer": 2,
      "explanation": "Account lockout prevents brute-force attacks after failed login attempts."
  },
  {
      "id": 15,
      "question": "Which of the following biometric factors is generally considered to have the best overall accuracy?",
      "options": ["Fingerprint scan.", "Hand geometry.", "Iris pattern.", "Voice recognition."],
      "correctAnswer": 2,
      "explanation": "Iris pattern recognition is generally considered the most accurate biometric method."
  },
  {
      "id": 16,
      "question": "An organization is implementing a Bring Your Own Device (BYOD) policy. What is a CRITICAL security requirement that should be enforced for personally owned devices accessing corporate resources?",
      "options": [
          "Requiring users to install all company-approved applications.",
          "Providing users with administrator rights on their devices.",
          "Requiring strong passcodes or biometric access.",
          "Mandating that users back up their devices to company servers."
      ],
      "correctAnswer": 2,
      "explanation": "Strong passcodes or biometrics are crucial for securing BYOD devices."
  },
  {
      "id": 17,
      "question": "A company wants to ensure that a departing employee's access to all company resources is revoked immediately upon termination. Which of the following processes is MOST critical for achieving this?",
      "options": [
          "Conducting an exit interview.",
          "Recovering company assets such as laptops and mobile phones.",
          "Removing network and system access and disabling user accounts as part of formal employment termination procedures.",
          "Notifying the employee's team members about their departure."
      ],
      "correctAnswer": 2,
      "explanation": "Immediate access revocation is essential during employee termination."
  },
  {
      "id": 18,
      "question": "Which of the following is a disadvantage of using passwords as a single factor of authentication?",
      "options": [
          "They are expensive to implement.",
          "They are difficult for users to remember.",
          "They are often insecure due to human nature, and transactions authenticated with only a password don’t necessarily provide absolute proof of a user’s identity.",
          "They are not supported by most modern operating systems."
      ],
      "correctAnswer": 2,
      "explanation": "Passwords alone are vulnerable to various attacks and human error."
  },
  {
      "id": 19,
      "question": "An organization is using smart cards for logical access control. Which type of authentication factor does a smart card primarily represent?",
      "options": ["Something you know.", "Something you have.", "Something you are.", "Somewhere you are."],
      "correctAnswer": 1,
      "explanation": "A smart card is a physical token, representing 'something you have'."
  },
  {
      "id": 20,
      "question": "In the context of Kerberos authentication, what is the primary role of the Key Distribution Center (KDC)?",
      "options": [
          "To encrypt user passwords and store them securely.",
          "To directly authenticate users to application servers.",
          "To issue tickets that grant users access to network resources.",
          "To manage user accounts and their associated permissions."
      ],
      "correctAnswer": 2,
      "explanation": "The KDC issues tickets for accessing network resources in Kerberos."
  },
  {
      "id": 21,
      "question": "An organization wants to prevent employees from accessing corporate resources from untrusted geographic locations. Which of the following controls can help achieve this?",
      "options": [
          "Implementing strong password complexity requirements.",
          "Enforcing multifactor authentication for all login attempts.",
          "Implementing geofencing to permit authentication only from particular nations or regions.",
          "Restricting login attempts to specific working hours."
      ],
      "correctAnswer": 2,
      "explanation": "Geofencing restricts access based on geographic location."
  },
  {
      "id": 22,
      "question": "Which of the following is a key principle that attribute-based access control (ABAC) leverages for making authorization decisions?",
      "options": [
          "User membership in predefined roles.",
          "Predefined rules based on object sensitivity levels.",
          "Access control lists associated with each resource.",
          "Attributes of the subject, attributes of the object, and environmental factors."
      ],
      "correctAnswer": 3,
      "explanation": "ABAC uses attributes of users, resources, and the environment for access control."
  },
  {
      "id": 23,
      "question": "What is a common security concern associated with single sign-on (SSO) implementations?",
      "options": [
          "Users having to remember multiple sets of credentials.",
          "Increased complexity in managing user access across different systems.",
          "If the login credentials for a user’s account are compromised, an intruder can access everything the user was authorized to access.",
          "Reduced convenience for users accessing multiple applications."
      ],
      "correctAnswer": 2,
      "explanation": "SSO compromise can lead to widespread unauthorized access."
  },
  {
      "id": 24,
      "question": "In the context of remote access, which authentication protocol uses a three-way handshake and a shared secret stored in cleartext on both the client and server?",
      "options": [
          "Password Authentication Protocol (PAP).",
          "Challenge-Handshake Authentication Protocol (CHAP).",
          "Terminal Access Controller Access Control System Plus (TACACS+).",
          "Remote Authentication Dial-In User Service (RADIUS)."
      ],
      "correctAnswer": 0,
      "explanation": "PAP (Password Authentication Protocol) sends passwords in cleartext and uses a two-way handshake."
  },
  {
      "id": 25,
      "question": "An organization is reviewing its identity management system and wants to ensure that temporary employees and contractors have access only for the duration of their engagement. Which lifecycle process is MOST relevant to this goal?",
      "options": ["Account access review.", "Provisioning and deprovisioning.", "Privilege escalation.", "Account lockout."],
      "correctAnswer": 1,
      "explanation": "Provisioning and deprovisioning manage access throughout the user lifecycle."
  },
  {
      "id": 26,
      "question": "Which of the following describes the concept of birthright access in identity and access management?",
      "options": [
          "The inherent right of all employees to access all company resources.",
          "The granting of administrative privileges to newly hired employees by default.",
          "The initial set of access rights granted to new workers based on their role, following the principles of need-to-know and least privilege.",
          "The automatic inheritance of access rights from a user's manager."
      ],
      "correctAnswer": 2,
      "explanation": "Birthright access is the initial access granted based on job role."
  },
  {
      "id": 27,
      "question": "What is the primary function of a credential management system (password vault)?",
      "options": [
          "To enforce strong password complexity requirements.",
          "To automatically reset user passwords on a regular basis.",
          "To centrally organize and securely store user IDs and passwords.",
          "To monitor user login attempts and detect brute-force attacks."
      ],
      "correctAnswer": 2,
      "explanation": "Credential management systems securely store user credentials."
  },
  {
      "id": 28,
      "question": "An organization wants to implement a context-aware authentication mechanism that considers the user’s device and network location. Which of the following approaches BEST aligns with this requirement?",
      "options": [
          "Implementing strong multifactor authentication for all users.",
          "Enforcing role-based access control based on job functions.",
          "Using risk-based authentication that presents additional challenges based on factors like geographic location and workstation in use.",
          "Restricting user access to specific hours of the day."
      ],
      "correctAnswer": 2,
      "explanation": "Risk-based authentication considers context like location and device."
  },
  {
      "id": 29,
      "question": "In Kerberos authentication, after a user successfully authenticates with the KDC's Authentication Server (AS), what is the next step in obtaining access to a specific service?",
      "options": [
          "The client directly contacts the service with their credentials.",
          "The client presents the Ticket Granting Ticket (TGT) to the KDC's Ticket Granting Service (TGS) to request a service ticket.",
          "The service directly contacts the KDC to verify the user's identity.",
          "The client re-authenticates with the AS for each service they want to access."
      ],
      "correctAnswer": 1,
      "explanation": "The client presents the TGT to the TGS to get a service ticket."
  },
  {
      "id": 30,
      "question": "Which of the following is a key benefit of implementing segregation of duties in access control?",
      "options": [
          "It simplifies the process of granting user permissions.",
          "It reduces the overall administrative overhead of managing user accounts.",
          "It reduces opportunities for fraud or abuse by ensuring that no single person has complete control over a critical system or process.",
          "It enhances the availability of critical systems by distributing responsibilities among multiple users."
      ],
      "correctAnswer": 2,
      "explanation": "Segregation of duties prevents single individuals from having too much control."
  },
  {
      "id": 31,
      "question": "A company is using digital certificates for user authentication. What is a key benefit of this method compared to traditional passwords?",
      "options": [
          "Digital certificates are easier for users to remember.",
          "Digital certificates can be easily reset by users if forgotten.",
          "Digital certificates can provide stronger authentication and help ensure users log in using only company-provided devices.",
          "Digital certificates are not susceptible to phishing attacks."
      ],
      "correctAnswer": 2,
      "explanation": "Digital certificates provide stronger authentication and device control."
  },
  {
      "id": 32,
      "question": "Which of the following remote access protocols encrypts the entire packet at the Network Layer (Layer 3) of the OSI model, providing confidentiality, integrity, and authenticity?",
      "options": ["Point-to-Point Tunneling Protocol (PPTP).", "Secure Shell (SSH).", "Internet Protocol Security (IPsec).", "Transport Layer Security (TLS)."],
      "correctAnswer": 2,
      "explanation": "IPsec encrypts the entire packet at the Network Layer."
  },
  {
      "id": 33,
      "question": "What is the PRIMARY goal of managing the identity and access provisioning lifecycle?",
      "options": [
          "To ensure that users have the most convenient access to all necessary resources.",
          "To minimize the cost associated with managing user accounts.",
          "To ensure that the right individuals have the right access to the right resources at the right time, and that access is removed when no longer needed.",
          "To comply with all relevant regulatory requirements related to data privacy."
      ],
      "correctAnswer": 2,
      "explanation": "The goal is to provide and revoke access appropriately throughout the user lifecycle."
  },
  {
      "id": 34,
      "question": "Which of the following is a limitation of using time-based one-time passwords (TOTP) if not implemented carefully?",
      "options": [
          "They require users to carry a separate hardware token.",
          "They are susceptible to replay attacks if the attacker acts quickly.",
          "They are difficult to integrate with existing authentication systems.",
          "They expire too quickly, causing inconvenience to users."
      ],
      "correctAnswer": 1,
      "explanation": "TOTP can be vulnerable to replay attacks if the attacker acts very quickly."
  },
  {
      "id": 35,
      "question": "An organization wants to implement a solution to centrally manage privileged access to critical infrastructure and applications, including the ability to record administrative sessions. Which of the following BEST fits this requirement?",
      "options": [
          "A standard identity and access management (IAM) system.",
          "A multi-factor authentication (MFA) solution.",
          "A privileged access management (PAM) solution.",
          "A security information and event management (SIEM) system."
      ],
      "correctAnswer": 2,
      "explanation": "PAM solutions manage and monitor privileged access."
  },
  {
      "id": 36,
      "question": "In the context of access control, what does authorization primarily determine?",
      "options": [
          "Verifying the identity of a user.",
          "What a user is permitted to do and/or what data the user can access.",
          "Tracking user activity and resource consumption.",
          "Establishing a secure communication channel between a user and a system."
      ],
      "correctAnswer": 1,
      "explanation": "Authorization determines what actions a user can perform."
  },
  {
      "id": 37,
      "question": "Which of the following is a common method for establishing proof of identity during the user registration process?",
      "options": [
          "Verifying the user's IP address and device information.",
          "Sending a one-time password to the user's registered email address.",
          "Requiring new workers to show government-issued photo identification and legal right-to-work status.",
          "Asking the user security questions based on publicly available information."
      ],
      "correctAnswer": 2,
      "explanation": "Government-issued IDs are used to verify identity during registration."
  },
  {
      "id": 38,
      "question": "What is a PRIMARY security benefit of implementing job rotation?",
      "options": [
          "It increases employee satisfaction and reduces burnout.",
          "It ensures that multiple employees are proficient in different roles, eliminating single points of failure.",
          "It reduces opportunities for fraud or abuse by making it difficult for individuals to establish long-term collusive relationships or hide illicit activities.",
          "It provides opportunities for employees to gain experience in different areas of the organization, promoting professional growth."
      ],
      "correctAnswer": 2,
      "explanation": "Job rotation reduces the risk of fraud and collusion."
  },
  {
      "id": 39,
      "question": "Which of the following is a characteristic of asynchronous dynamic password tokens?",
      "options": [
          "They generate a new password at a fixed time interval.",
          "They store a static password or digital certificate.",
          "They generate a new password by calculating the correct response to a system-generated random challenge string (nonce) the owner enters manually.",
          "The passcode is valid only during a fixed time window."
      ],
      "correctAnswer": 2,
      "explanation": "Asynchronous tokens use a challenge-response mechanism."
  },
  {
      "id": 40,
      "question": "An organization is considering federating identity with several cloud service providers. Which of the following BEST describes the benefit of this approach?",
      "options": [
          "It centralizes all user authentication within the organization's on-premises directory.",
          "It eliminates the need for the organization to manage user accounts in the cloud.",
          "It simplifies user access to multiple cloud services using a single set of credentials.",
          "It enhances the security of cloud services by enforcing the organization's strong authentication policies."
      ],
      "correctAnswer": 2,
      "explanation": "Federation simplifies access to multiple cloud services with single credentials."
  },
  {
      "id": 41,
      "question": "In the context of access control to information assets, what is the PRIMARY purpose of file and directory-level permissions?",
      "options": [
          "To encrypt the data stored in the files and directories.",
          "To track user activity and audit access attempts.",
          "To determine which people or systems are permitted to access specific files and directories and what actions they can perform.",
          "To prevent unauthorized modification of the file system structure."
      ],
      "correctAnswer": 2,
      "explanation": "File and directory permissions control access to specific data."
  },
  {
      "id": 42,
      "question": "Which of the following BEST describes the function of a security token in multifactor authentication?",
      "options": [
          "Something you know, such as a secret question and answer.",
          "Something you have, a physical or digital device that generates or stores authentication credentials.",
          "Something you are, a unique biometric characteristic.",
          "Somewhere you are, the geographic location of the user."
      ],
      "correctAnswer": 1,
      "explanation": "A security token is a physical or digital device, representing 'something you have'."
  },
  {
      "id": 43,
      "question": "An organization wants to implement a strong authentication method for remote access that leverages existing smart cards used for physical access. Which of the following would be a suitable technology?",
      "options": [
          "Password-based authentication over a VPN.",
          "Time-based one-time passwords sent via SMS.",
          "Authentication using digital certificates stored on the smart cards.",
          "Biometric authentication using fingerprint scanners on remote devices."
      ],
      "correctAnswer": 2,
      "explanation": "Digital certificates on smart cards can be used for strong authentication."
  },
  {
      "id": 44,
      "question": "What is a PRIMARY consideration when managing service accounts in a secure environment?",
      "options": [
          "Requiring frequent password changes by the applications using the accounts.",
          "Enforcing complex password requirements that meet user-defined standards.",
          "Limiting their privileges to the minimum required for the specific application or service to function.",
          "Enabling interactive logon for all service accounts to facilitate troubleshooting."
      ],
      "correctAnswer": 2,
      "explanation": "Service accounts should have the least privileges necessary."
  },
  {
    "id": 45,
    "question": "In a Mandatory Access Control (MAC) system, who or what primarily determines the access rights to information?",
    "options": [
        "The owner of the resource.",
        "The user attempting to access theresource.",
        "A central authority or the operating system.",
        "A combination of user roles and group memberships."
    ],
    "correctAnswer": 2,
    "explanation": "In a MAC system, a central authority, such as the government, determines access rights, and the OS enforces them."
},
{
    "id": 46,
    "question": "Which of the following is a primary advantage of implementing Role-Based Access Control (RBAC)?",
    "options": [
        "It allows for very granular control over individual data objects.",
        "It simplifies access management by assigning permissions to roles rather than individual users.",
        "It automatically adjusts access rights based on changes in the environment.",
        "It ensures that access rights are determined solely by the resource owner."
    ],
    "correctAnswer": 1,
    "explanation": "RBAC simplifies access management by assigning permissions to roles."
},
{
    "id": 47,
    "question": "What is the main purpose of an access control list (ACL)?",
    "options": [
        "To define the roles within an organization.",
        "To list all users who have access to a particular system.",
        "To specify which subjects are allowed to access specific resources and what actions they can perform.",
        "To record all access attempts to a system."
    ],
    "correctAnswer": 2,
    "explanation": "An ACL specifies which subjects can access resources and their allowed actions."
},
{
    "id": 48,
    "question": "Which of the following is a characteristic of discretionary access control (DAC)?",
    "options": [
        "Access is based on predefined rules set by a central authority.",
        "Resource owners have significant control over who can access their resources.",
        "Access is determined by the operating system based on security labels.",
        "Access is managed through a matrix of subjects and objects."
    ],
    "correctAnswer": 1,
    "explanation": "In DAC, resource owners control who can access their resources."
},
{
    "id": 49,
    "question": "Which access control model is the MOST flexible and can take into account a wide range of attributes, including time of day, location, and device type?",
    "options": [
        "Mandatory Access Control (MAC).",
        "Discretionary Access Control (DAC).",
        "Role-Based Access Control (RBAC).",
        "Attribute-Based Access Control (ABAC)."
    ],
    "correctAnswer": 3,
    "explanation": "ABAC is the most flexible, considering various attributes for access control."
},
{
    "id": 50,
    "question": "What is the primary difference between identification and authentication?",
    "options": [
        "Identification verifies a user's privileges, while authentication verifies their identity.",
        "Identification establishes a user's identity, while authentication verifies that identity.",
        "Identification assigns roles, while authentication assigns permissions.",
        "Identification manages access, while authentication logs access."
    ],
    "correctAnswer": 1,
    "explanation": "Identification establishes who a user is, and authentication verifies that they are who they claim to be."
}
  ],
  flashCards: [
    {
      "id": 1,
      "front": "Identity and Access Management (IAM)",
      "back": "Identity and Access Management (IAM) refers to the collection of processes and technologies that control access to critical assets. In the modern cloud era, with widespread mobile computing and anytime, anywhere access to applications and data, many security practitioners now refer to identity as 'the new perimeter'. IAM is considered part of the core of information security, and when correctly implemented, it prevents unauthorised individuals from accessing critical assets, thereby reducing breaches and other abuses of information and assets.",
      "category": "Access Control"
    },
    {
      "id": 2,
      "front": "Physical Access Control",
      "back": "Physical access control is implemented to control access to facilities, ensuring the safety of personnel and protecting information systems and other assets located within. This is accomplished through various means, including key card access systems, which can be enhanced with optional biometric readers or personal identification number (PIN) pads. These systems function in both preventive (by restricting access to sensitive areas) and detective (by recording subjects' movements) contexts.",
      "category": "Access Control"
    },
    {
      "id": 3,
      "front": "Logical Access Control",
      "back": "Logical access control primarily employs logical controls that determine which people or systems (known as subjects) are permitted to access specific files, directories, databases, tables, records, or fields (known as objects). Examples of these mechanisms include file- and directory-level permissions, typically managed at the operating system level or within file-sharing systems like SharePoint. The main goal of logical controls is to ensure the confidentiality and integrity of data by disallowing unauthorised access.",
      "category": "Access Control"
    },
    {
      "id": 4,
      "front": "Subject (Access Control)",
      "back": "In access control terminology, a subject is an active entity that accesses a passive object to receive information from, or data about, an object. Subjects can include users, programs, processes, computers, or anything else that can access a resource. When authorised, subjects have the capability to modify objects. For simplification, you can often substitute the word 'user' for 'subject'.",
      "category": "Access Control"
    },
    {
      "id": 5,
      "front": "Object (Access Control)",
      "back": "In access control terminology, an object is a passive entity that provides information to active subjects. Examples of objects include files, databases, computers, programs, processes, printers, and storage media. You can often simplify by substituting the word 'file' for 'object'.",
      "category": "Access Control"
    },
    {
      "id": 6,
      "front": "Identification",
      "back": "Identification is the process by which a subject professes an identity, and accountability is initiated. It involves a subject providing an identity to a system (e.g., typing a username, swiping a smart card, presenting a biometric) to begin the authentication, authorisation, and accountability (AAA) process. Without identification, a system cannot link an authentication factor to the subject.",
      "category": "Access Control"
    },
    {
      "id": 7,
      "front": "Authentication",
      "back": "Authentication is the process of verifying the identity professed by a subject. It confirms that a user or entity is who they claim to be. This process typically involves authentication factors:\n• Something you know (e.g., passwords, PINs).\n• Something you have (e.g., smart cards, tokens).\n• Something you are (e.g., biometrics like fingerprint or iris scan).",
      "category": "Access Control"
    },
    {
      "id": 8,
      "front": "Authorisation",
      "back": "Authorisation is the process of determining what an authenticated subject can do with an object. It defines the permissions granted to a subject to access objects or perform specific actions on systems. Authorisation mechanisms ensure that even if an identity is verified, access is restricted to only what is necessary and allowed by policy.",
      "category": "Access Control"
    },
    {
      "id": 9,
      "front": "Accountability",
      "back": "Accountability refers to ensuring that the subject of an activity or event cannot deny that the event occurred. It requires linking an action to an individual or entity. Accountability is supported by mechanisms such as auditing, logging, and nonrepudiation. It provides the ability to trace activities and hold individuals responsible for their actions within a system.",
      "category": "Access Control"
    },
    {
      "id": 10,
      "front": "Single Sign-On (SSO)",
      "back": "Single Sign-On (SSO) is a system that allows a user to present a single set of login credentials (e.g., username and password) to an authentication server. This server then transparently logs the user on to all other enterprise systems and applications for which that user is authorised. The benefits of SSO include increased convenience for users and reduced risk for organisations, as users are more likely to use stronger passwords and handle credentials more safely.",
      "category": "Access Control"
    },
    {
      "id": 11,
      "front": "Lightweight Directory Access Protocol (LDAP)",
      "back": "Lightweight Directory Access Protocol (LDAP) is a protocol for querying and modifying directory services that run over TCP/IP. It can be thought of as a telephone directory for network services and assets. Users, clients, and processes can search the directory service to find where a desired system or resource resides. Subjects must authenticate to the directory service before performing queries and lookup activities, and the service reveals information based on assigned privileges.",
      "category": "Access Control"
    },
    {
      "id": 12,
      "front": "Multi-Factor Authentication (MFA)",
      "back": "Multi-Factor Authentication (MFA) is an authentication mechanism that requires two or more distinct factors from different categories to verify a user's identity. These factors typically fall into categories of:\n• Something you know (e.g., a password or PIN).\n• Something you have (e.g., a smart card, mobile phone for an OTP, or security token).\n• Something you are (e.g., a fingerprint or iris scan). MFA significantly reduces risk compared to single-factor authentication by adding layers of security.",
      "category": "Access Control"
    },
    {
      "id": 13,
      "front": "Biometric Authentication",
      "back": "Biometric authentication verifies identity based on unique physical characteristics (e.g., fingerprint, iris scan, facial pattern) or behavioural characteristics (e.g., voice pattern, gait). This method offers a high level of protection compared to other authentication mechanisms due to the inherent uniqueness of biometric data. However, considerations such as accuracy, error rates, and user acceptance are important.",
      "category": "Access Control"
    },
    {
      "id": 14,
      "front": "Federated Identity Management (FIM)",
      "back": "Federated Identity Management (FIM) is an arrangement that allows users to authenticate once and gain access to resources across multiple, independent security domains (e.g., partner organisations or cloud services) without needing to re-authenticate for each domain. It enables identity portability and typically relies on standards like Security Assertion Markup Language (SAML).",
      "category": "Access Control"
    },
    {
      "id": 15,
      "front": "Identity and Access Provisioning Life Cycle",
      "back": "The Identity and Access Provisioning Life Cycle encompasses formal policies and procedures for the creation, management, and deletion of accounts used by subjects to access assets. This cycle includes:\n• Provisioning: Initial steps of creating accounts and assigning appropriate access.\n• Ongoing Management: Role definition (assigning users to new roles), privilege escalation management (e.g., use of sudo).\n• Deprovisioning: Removing access and deleting accounts when no longer needed (e.g., upon employee termination). Effective management of this lifecycle is crucial for maintaining a secure environment and adhering to the principle of least privilege.",
      "category": "Access Control"
    },
    {
      "id": 16,
      "front": "OpenID Connect (OIDC) / Open Authorization (OAuth)",
      "back": "OpenID Connect (OIDC) is a standards-based authentication protocol built on the OAuth (specifically, OAuth 2.0) framework. OAuth 2.0 is used to grant an application access to another application's data. OIDC, in turn, provides an identity layer on top of OAuth 2.0, enabling clients to verify the identity of the end-user based on authentication performed by an authorization server, and to obtain basic profile information about the end-user in an interoperable and REST-like manner. This typically involves an authorization server (identity platform) and an OAuth client (native or web app).",
      "category": "Access Control"
    },
    {
      "id": 17,
      "front": "Security Assertion Markup Language (SAML)",
      "back": "Security Assertion Markup Language (SAML) is an XML-based open standard for exchanging authentication and authorisation data between security domains. It is commonly used for federated identity management and web-based single sign-on (SSO) scenarios, allowing a user's authenticated identity to be transferred between different service providers. SAML defines how security assertions (statements about an authenticated user) are created and exchanged.",
      "category": "Access Control"
    },
    {
      "id": 18,
      "front": "Kerberos",
      "back": "Kerberos is a network authentication protocol that uses secret-key cryptography to provide strong authentication for client/server applications by proving identities over an insecure network. It provides mutual authentication, meaning both the user and the server verify each other's identity. Kerberos relies on a trusted third party, the Key Distribution Centre (KDC), to issue tickets that grant access to services.",
      "category": "Access Control"
    },
    {
      "id": 19,
      "front": "Remote Authentication Dial-In User Service (RADIUS)",
      "back": "Remote Authentication Dial-In User Service (RADIUS) is an Authentication, Authorisation, and Accounting (AAA) protocol that manages access in an AAA transaction. RADIUS typically uses UDP for transport and is commonly used for network access authentication (e.g., VPNs, Wi-Fi networks). While widely adopted, it has some shortcomings, including using UDP and transmitting passwords in the clear in its basic form.",
      "category": "Access Control"
    },
    {
      "id": 20,
      "front": "Terminal Access Controller Access Control System Plus (TACACS+)",
      "back": "Terminal Access Controller Access Control System Plus (TACACS+) is a TCP-based (port 49) access control protocol that provides Authentication, Authorisation, and Accounting (AAA) services. It is known for its wide support of various authentication mechanisms (e.g., PAP, CHAP, MS-CHAP, EAP, token cards, Kerberos) and its granular control of authorisation parameters. TACACS+ is often considered an enhancement over older TACACS versions and RADIUS in certain enterprise environments.",
      "category": "Access Control"
    },
    {
      "id": 21,
      "front": "Need to Know",
      "back": "Need to Know is a security principle that dictates that individuals should only have access to the essential information required to perform their assigned job function. This principle limits access based on specific job responsibilities, even if a user holds a higher security clearance that would otherwise permit broader access. It is a fundamental concept in protecting sensitive information.",
      "category": "Access Control"
    },
    {
      "id": 22,
      "front": "Principle of Least Privilege",
      "back": "The Principle of Least Privilege states that in a secured environment, users (or other subjects) should be granted the minimum amount of access necessary to complete their required work tasks or job responsibilities. By limiting user access to only what they need, this principle significantly reduces the vulnerability of sensitive information and limits the scope of damage if a security incident occurs. It is closely related to the 'need to know' principle.",
      "category": "Access Control"
    },
    {
      "id": 23,
      "front": "Separation of Duties",
      "back": "Separation of Duties is a security concept involving the division of critical, significant, or sensitive work tasks among several individuals. This practice ensures that no single person possesses complete authority or control over a critical system or process, thereby preventing any one individual from compromising system security through fraud, error, or malicious intent.",
      "category": "Access Control"
    },
    {
      "id": 24,
      "front": "Transitive Trust",
      "back": "A transitive trust extends a trust relationship between two security domains (e.g., Domain A trusts Domain B) to all of their subdomains (e.g., if Domain B trusts Domain C, then Domain A also implicitly trusts Domain C). In the context of the principle of least privilege, non-transitive trusts are often preferred as they enforce the principle by granting trust to a single domain at a time, preventing unintended or overly broad access permissions.",
      "category": "Access Control"
    },
    {
      "id": 25,
      "front": "Privilege Escalation",
      "back": "Privilege escalation refers to the act of a user or process gaining access rights higher than what was originally intended or granted. This can involve moving from a lower-privileged user account to a higher-privileged administrative account, or from user mode to kernel/privileged mode. Mechanisms and practices, such as Privileged Access Management (PAM), are used to manage and monitor privileged credentials and access to systems and devices to prevent unauthorised escalation.",
      "category": "Access Control"
    }
  ]
}; 