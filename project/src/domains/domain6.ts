import { Domain } from './types';

export const domain6: Domain = {
  id: 6,
  name: "Security Assessment and Testing",
  description: "Designing, performing, and analyzing security testing",
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
  flashCards: []
}; 