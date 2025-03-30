import { Domain } from './types';

export const domain2: Domain = {
  id: 2,
  name: "Asset Security",
  description: "Identifying and classifying information and assets, determining and maintaining appropriate security controls",
  questions: [
    {
      "id": 1,
      "question": "An organisation is implementing a new data loss prevention (DLP) system. Before fully deploying the system, what is the most critical initial step to ensure its effectiveness without disrupting legitimate business processes?",
      "options": [
        "Immediately block all detected policy violations to prevent data leakage.",
        "Configure the DLP system in learn mode to understand data usage patterns.",
        "Create extensive block lists based on industry best practices.",
        "Deploy the DLP system to a small pilot group and aggressively enforce policies."
      ],
      "correctAnswer": 1,
      "explanation": "Configuring the DLP system in learn mode initially allows the organisation to understand legitimate data flows and uses before enforcing policies, minimising disruptions."
    },
    {
      "id": 2,
      "question": "A company handles highly sensitive customer financial data. Which of the following data classification labels would be most appropriate for this type of information?",
      "options": [
        "Public",
        "Internal Use Only",
        "Confidential",
        "Restricted"
      ],
      "correctAnswer": 2,
      "explanation": "Confidential is a common classification label used for sensitive information whose unauthorised disclosure could have significant adverse effects."
    },
    {
      "id": 3,
      "question": "An employee is leaving the organisation. Which of the following actions is most crucial to secure information assets and prevent unauthorised access?",
      "options": [
        "Changing the employee's office door lock.",
        "Conducting an exit interview.",
        "Revoking the employee's network and system access and disabling their user account.",
        "Collecting the employee's company laptop."
      ],
      "correctAnswer": 2,
      "explanation": "Immediately revoking network and system access is paramount to prevent the departing employee from accessing sensitive information."
    },
    {
      "id": 4,
      "question": "What is the primary purpose of classifying information assets within an organisation?",
      "options": [
        "To comply with industry regulations.",
        "To simplify data storage procedures.",
        "To assign an appropriate level of protection based on sensitivity and criticality.",
        "To track the lifecycle of data."
      ],
      "correctAnswer": 2,
      "explanation": "Data classification helps determine the appropriate level of security controls needed for different types of information based on their value and sensitivity."
    },
    {
      "id": 5,
      "question": "During an audit, it is noted that the organisation does not have a formal process for identifying data owners. What is the most significant risk associated with this lack of accountability?",
      "options": [
        "Increased storage costs due to data duplication.",
        "Difficulty in managing user access rights.",
        "Ambiguity regarding responsibility for data security and handling requirements.",
        "Inefficient data backup and recovery procedures."
      ],
      "correctAnswer": 2,
      "explanation": "Without defined data owners, there is no clear accountability for establishing security measures, access policies, and handling requirements."
    },
    {
      "id": 6,
      "question": "An organisation uses a cloud-based storage solution for its project-related documents. According to the shared responsibility model, who is primarily responsible for encrypting the documents stored in the cloud?",
      "options": [
        "The cloud service provider.",
        "Both the organisation and the cloud service provider equally.",
        "The organisation.",
        "It depends on the service level agreement."
      ],
      "correctAnswer": 2,
      "explanation": "In cloud environments, the organisation is generally responsible for the security of its data, including encryption, regardless of the service model (IaaS, PaaS, SaaS)."
    },
    {
      "id": 7,
      "question": "What is the key difference between data marking and data tagging?",
      "options": [
        "Data marking is for electronic documents, while data tagging is for physical documents.",
        "Data marking is done automatically by systems, while data tagging is a manual process.",
        "Data marking is human-readable, while data tagging is generally machine-readable.",
        "Data marking indicates ownership, while data tagging indicates classification."
      ],
      "correctAnswer": 2,
      "explanation": "Marking uses labels visible to humans, while tagging uses metadata that systems can interpret, often for DLP purposes."
    },
    {
      "id": 8,
      "question": "An organisation is developing a policy for the end-of-life disposal of hard drives containing sensitive data. Which of the following methods would be most effective in ensuring data is unrecoverable?",
      "options": [
        "Standard operating system deletion.",
        "Reformatting the hard drive.",
        "Degaussing or physical destruction.",
        "Overwriting the drive once with random data."
      ],
      "correctAnswer": 2,
      "explanation": "Degaussing (for magnetic media) or physical destruction are the most effective methods to render data unrecoverable at the end of an asset's life."
    },
    {
      "id": 9,
      "question": "What is the primary goal of establishing data retention policies?",
      "options": [
        "To minimise storage costs.",
        "To simplify data management.",
        "To comply with legal, regulatory, and business requirements.",
        "To facilitate data analysis and reporting."
      ],
      "correctAnswer": 2,
      "explanation": "Data retention policies are primarily driven by the need to meet various compliance obligations and business needs for historical data."
    },
    {
      "id": 10,
      "question": "An organisation is implementing role-based access control (RBAC). What is the fundamental principle behind RBAC?",
      "options": [
        "Granting access based on individual user identities.",
        "Granting access based on a user's assigned roles and responsibilities.",
        "Granting access based on predefined rules and conditions.",
        "Granting access based on the sensitivity label of the data."
      ],
      "correctAnswer": 1,
      "explanation": "RBAC grants access permissions to users based on their roles within the organisation, simplifying access management."
    },
    {
      "id": 11,
      "question": "During the secure provisioning of a new server, what is a critical security step to minimise the attack surface?",
      "options": [
        "Installing all available software packages by default.",
        "Using default vendor passwords for initial configuration.",
        "Hardening the system by removing unnecessary services and applications.",
        "Ensuring the server is immediately accessible over the public internet."
      ],
      "correctAnswer": 2,
      "explanation": "System hardening involves removing non-essential components to reduce potential vulnerabilities."
    },
    {
      "id": 12,
      "question": "What is the primary objective of conducting an asset inventory?",
      "options": [
        "To track the financial depreciation of IT equipment.",
        "To ensure compliance with software licensing agreements.",
        "To identify and manage all resources that need protection.",
        "To optimise the utilisation of IT resources."
      ],
      "correctAnswer": 2,
      "explanation": "An accurate asset inventory is fundamental to understanding what needs to be secured."
    },
    {
      "id": 13,
      "question": "Which of the following data states is most vulnerable to interception and requires strong encryption during handling?",
      "options": [
        "Data at rest on a secure server.",
        "Data in use by an authorised application.",
        "Data in motion being transmitted over a public network.",
        "Data in archival storage."
      ],
      "correctAnswer": 2,
      "explanation": "Data in motion over untrusted networks is susceptible to eavesdropping and requires encryption to maintain confidentiality."
    },
    {
      "id": 14,
      "question": "What is the key responsibility of a data custodian?",
      "options": [
        "To define the classification level of the data.",
        "To authorise access to the data.",
        "To implement and maintain security controls to protect the data.",
        "To determine the retention period for the data."
      ],
      "correctAnswer": 2,
      "explanation": "Data custodians are responsible for the day-to-day protection and management of data according to the owner's requirements."
    },
    {
      "id": 15,
      "question": "An organisation is implementing a Bring Your Own Device (BYOD) policy. What is a critical security requirement to include in this policy to protect company data?",
      "options": [
        "Allowing users to root or jailbreak their devices.",
        "Requiring users to disable device passcodes.",
        "Defining security requirements such as passcodes and data encryption.",
        "Restricting the types of personal apps users can install."
      ],
      "correctAnswer": 2,
      "explanation": "A BYOD policy must define minimum security standards for personal devices accessing company data, including passcodes and encryption."
    },
    {
      "id": 16,
      "question": "What is the primary benefit of implementing data masking techniques?",
      "options": [
        "To increase the performance of data processing.",
        "To protect sensitive information by obscuring its actual values.",
        "To ensure the integrity and accuracy of data.",
        "To simplify data backup and recovery processes."
      ],
      "correctAnswer": 1,
      "explanation": "Data masking obscures sensitive data, making it less useful to unauthorised viewers while still allowing for testing or development purposes."
    },
    {
      "id": 17,
      "question": "An organisation is migrating its data to a new storage system. What is a crucial security consideration during this process?",
      "options": [
        "Using the same default permissions as the old system for ease of transition.",
        "Minimising downtime as the top priority, potentially skipping security checks.",
        "Reviewing and applying appropriate access controls and encryption to the data in the new system.",
        "Retiring the old storage system immediately after the migration is complete."
      ],
      "correctAnswer": 2,
      "explanation": "It is essential to re-evaluate and apply suitable security controls to the data in the new storage system to ensure its continued protection."
    },
    {
      "id": 18,
      "question": "What is the key principle of least privilege in the context of asset security?",
      "options": [
        "Granting all users access to all necessary resources by default.",
        "Granting users only the minimum level of access required to perform their job duties.",
        "Regularly increasing user privileges over time to enhance productivity.",
        "Centralising all access control management under a single administrator."
      ],
      "correctAnswer": 1,
      "explanation": "The principle of least privilege limits access to only what is strictly necessary for a user to perform their assigned tasks, reducing the potential for misuse."
    },
    {
      "id": 19,
      "question": "An organisation needs to ensure the authenticity of software deployed on its critical servers. What security control can help achieve this?",
      "options": [
        "Implementing strong password complexity requirements.",
        "Regularly patching the operating system.",
        "Utilising a Trusted Platform Module (TPM) for hardware-based integrity checks.",
        "Enforcing multi-factor authentication for server access."
      ],
      "correctAnswer": 2,
      "explanation": "A TPM can provide hardware-based integrity checks to verify the authenticity and integrity of system components, including software."
    },
    {
      "id": 20,
      "question": "What is the primary risk associated with retaining data beyond its legally required or business-relevant lifecycle?",
      "options": [
        "Increased complexity in data analysis.",
        "Higher energy consumption for data storage.",
        "Increased legal and compliance risks, as well as potential data breach exposure.",
        "Slower data retrieval times."
      ],
      "correctAnswer": 2,
      "explanation": "Retaining unnecessary data increases the risk of data breaches and can create legal and compliance liabilities."
    },
      {
      "id": 21,
      "question": "An organisation is implementing a new application that processes sensitive customer data. What is a fundamental security requirement to consider during the application's design phase?",
      "options": [
        "Implementing a complex user interface for better security.",
        "Storing all data in plain text for easy access.",
        "Implementing appropriate encryption mechanisms for data at rest and in transit.",
        "Disabling all logging features to prevent performance issues."
      ],
      "correctAnswer": 2,
      "explanation": "Encryption is a crucial security control for protecting the confidentiality of sensitive data both when stored and when transmitted."
    },
    {
      "id": 22,
      "question": "What is the key difference between asset owners and asset custodians regarding information security?",
      "options": [
        "Asset owners perform daily maintenance, while custodians define security policies.",
        "Asset owners have ultimate responsibility for the security of the asset, while custodians manage day-to-day security administration.",
        "Asset owners manage physical security, while custodians manage logical security.",
        "Asset owners authorise access, while custodians monitor access logs."
      ],
      "correctAnswer": 1,
      "explanation": "Owners are accountable for the asset's security, while custodians are responsible for implementing the security controls."
    },
    {
      "id": 23,
      "question": "An organisation wants to control which software applications are allowed to run on employee workstations to prevent malware infections. What security control can be implemented?",
      "options": [
        "Deploying a host-based intrusion detection system (HIDS).",
        "Enforcing strong password complexity requirements.",
        "Implementing application whitelisting.",
        "Regularly scanning for vulnerabilities."
      ],
      "correctAnswer": 2,
      "explanation": "Application whitelisting allows only approved applications to run, blocking unauthorised and potentially malicious software."
    },
    {
      "id": 24,
      "question": "What is a critical factor to consider when determining the appropriate data classification level for a specific type of information?",
      "options": [
        "The physical location where the data is stored.",
        "The number of users who have access to the data.",
        "The potential impact of unauthorised disclosure, modification, or destruction of the data.",
        "The cost of implementing security controls for the data."
      ],
      "correctAnswer": 2,
      "explanation": "The sensitivity and criticality of the data, and the potential harm from its compromise, are primary drivers for data classification."
    },
    {
      "id": 25,
      "question": "An organisation outsources its data centre operations. What is a key contractual requirement related to asset security that should be included in the agreement with the third-party vendor?",
      "options": [
        "Granting the vendor full ownership of all data stored in the data centre.",
        "Minimising the vendor's security responsibilities to reduce costs.",
        "Clearly defining security responsibilities, access controls, and audit rights for the organisation's assets.",
        "Assuming the vendor's existing security policies are sufficient."
      ],
      "correctAnswer": 2,
      "explanation": "The contract must explicitly outline security responsibilities and the organisation's rights regarding its assets managed by the vendor."
    },
    {
      "id": 26,
      "question": "What is the primary purpose of implementing data loss prevention (DLP) tools?",
      "options": [
        "To encrypt all sensitive data at rest and in transit.",
        "To monitor network traffic for intrusion attempts.",
        "To prevent sensitive information from leaving the organisation's control without authorisation.",
        "To manage user access rights and permissions."
      ],
      "correctAnswer": 2,
      "explanation": "DLP tools are designed to detect and prevent the unauthorised exfiltration of sensitive data."
    },
    {
      "id": 27,
      "question": "An organisation is decommissioning an old server that hosted a critical database. What is a crucial step in ensuring appropriate asset retention and data security?",
      "options": [
        "Wiping the server's hard drives using a standard deletion method.",
        "Reformatting the hard drives and reusing the server for less sensitive purposes.",
        "Ensuring the hard drives are securely destroyed according to data disposal policies and retention schedules.",
        "Storing the decommissioned server in a secure storage facility indefinitely."
      ],
      "correctAnswer": 2,
      "explanation": "Data disposal must align with retention policies and security standards to prevent data leakage."
    },
    {
      "id": 28,
      "question": "What is the most significant risk of not having a well-defined data lifecycle management process?",
      "options": [
        "Difficulty in tracking software licenses.",
        "Increased network bandwidth consumption.",
        "Inconsistent data handling, potential data loss, and compliance violations.",
        "Inefficient allocation of storage resources."
      ],
      "correctAnswer": 2,
      "explanation": "A lack of data lifecycle management leads to inconsistent security, retention issues, and potential compliance failures."
    },
    {
      "id": 29,
      "question": "An organisation is granting temporary privileged access to a contractor for a specific project. What security mechanism can enforce the principle of least privilege for this scenario?",
      "options": [
        "Assigning the contractor a permanent administrator account.",
        "Sharing existing administrator credentials with the contractor.",
        "Implementing just-in-time (JIT) access with time-bound permissions.",
        "Relying on the contractor's personal security practices."
      ],
      "correctAnswer": 2,
      "explanation": "JIT access provides temporary and specific privileges only when needed, adhering to least privilege."
    },
    {
      "id": 30,
      "question": "What is the primary goal of data anonymisation techniques?",
      "options": [
        "To encrypt sensitive data for secure transmission.",
        "To compress large datasets for efficient storage.",
        "To remove or alter personally identifiable information to prevent identification of individuals.",
        "To create backups of critical databases."
      ],
      "correctAnswer": 2,
      "explanation": "Anonymisation aims to render data non-attributable to specific individuals, protecting privacy."
    },
    {
      "id": 31,
      "question": "An organisation is selecting a cloud access security broker (CASB). What is a key capability to look for to control user access to cloud applications?",
      "options": [
        "Performing deep packet inspection of network traffic.",
        "Providing endpoint detection and response capabilities.",
        "Enforcing access policies and directing users to sanctioned cloud services.",
        "Managing security patches for operating systems and applications."
      ],
      "correctAnswer": 2,
      "explanation": "A CASB helps enforce security policies and guide users towards approved cloud applications, controlling access and data exfiltration."
    },
    {
      "id": 32,
      "question": "What is a critical aspect of securely provisioning user accounts in a new system?",
      "options": [
        "Using the same default password for all new accounts for simplicity.",
        "Granting broad access rights initially, which can be refined later.",
        "Ensuring user identity is verified and assigning temporary credentials with a short expiry period.",
        "Using easily guessable temporary credentials for user convenience."
      ],
      "correctAnswer": 2,
      "explanation": "Verifying user identity and using temporary, short-lived credentials helps prevent unauthorised access during initial provisioning."
    },
    {
      "id": 33,
      "question": "What is the primary purpose of a data classification handling policy?",
      "options": [
        "To define the technical specifications for data storage systems.",
        "To provide guidelines on how data should be protected based on its classification level.",
        "To determine the legal and regulatory requirements for data.",
        "To assign ownership and custodianship for data assets."
      ],
      "correctAnswer": 1,
      "explanation": "A handling policy outlines the specific security measures required for each data classification level across various use cases."
    },
    {
      "id": 34,
      "question": "An organisation is using encryption to protect sensitive data at rest on its servers. What is a critical aspect of key management to ensure the ongoing security of this data?",
      "options": [
        "Storing encryption keys on the same servers as the encrypted data for easy access.",
        "Using simple and easily memorable encryption keys.",
        "Securely generating, distributing, storing, and regularly rotating encryption keys.",
        "Granting all administrators access to all encryption keys."
      ],
      "correctAnswer": 2,
      "explanation": "Effective key management is essential for the strength and longevity of encryption protection."
    },
    {
      "id": 35,
      "question": "What is the most significant risk associated with virtual machine (VM) sprawl in a cloud environment?",
      "options": [
        "Increased cost of cloud computing resources.",
        "Difficulty in managing the performance of VMs.",
        "Unmanaged and potentially unpatched VMs creating security vulnerabilities.",
        "Incompatibility issues between different VM operating systems."
      ],
      "correctAnswer": 2,
      "explanation": "VM sprawl can lead to forgotten and unmanaged VMs that lack necessary security updates, creating easy targets for attackers."
    },
    {
      "id": 36,
      "question": "What is the primary goal of implementing digital rights management (DRM) for sensitive documents?",
      "options": [
        "To ensure the integrity and authenticity of documents.",
        "To track who has accessed and modified documents.",
        "To enforce control over the use, modification, and distribution of documents.",
        "To encrypt documents for secure storage."
      ],
      "correctAnswer": 2,
      "explanation": "DRM aims to control how digital content can be used, preventing unauthorised actions."
    },
    {
      "id": 37,
      "question": "An organisation needs to comply with regulations that require the secure disposal of paper documents containing sensitive personal information. Which of the following methods is most appropriate?",
      "options": [
        "Placing the documents in regular office recycling bins.",
        "Shredding the documents into large strips.",
        "Using cross-cut shredders or incineration.",
        "Storing the documents in locked storage indefinitely."
      ],
      "correctAnswer": 2,
      "explanation": "Cross-cut shredding or incineration are the most secure methods for destroying sensitive paper documents."
    },
    {
      "id": 38,
      "question": "What is the key benefit of implementing attribute-based access control (ABAC)?",
      "options": [
        "Simplified management of access rights based on user roles.",
        "Enforcement of mandatory access policies based on data sensitivity labels.",
        "Granular access control based on dynamic attributes of subjects, objects, and the environment.",
        "Centralised management of all access control rules in a single repository."
      ],
      "correctAnswer": 2,
      "explanation": "ABAC allows for very fine-grained access control decisions based on various attributes."
    },
    {
      "id": 39,
      "question": "What is the primary risk associated with using default configurations for operating systems and applications?",
      "options": [
        "Increased system performance overhead.",
        "Incompatibility with other security tools.",
        "Presence of insecure default settings and unnecessary services that can be exploited.",
        "Difficulty in applying security patches and updates."
      ],
      "correctAnswer": 2,
      "explanation": "Default configurations often include insecure settings and unnecessary services that attackers can leverage."
    },
    {
      "id": 40,
      "question": "What is a critical security consideration when managing service accounts?",
      "options": [
        "Assigning service accounts to individual users for better accountability.",
        "Using easily guessable passwords for service accounts due to infrequent use.",
        "Ensuring service account passwords are strong, regularly rotated, and securely managed.",
        "Granting service accounts broad administrative privileges to ensure proper functionality."
      ],
      "correctAnswer": 2,
      "explanation": "Service accounts, being privileged and non-interactive, require robust password management to prevent misuse."
    },
    {
      "id": 41,
      "question": "What is the primary benefit of implementing data tagging in conjunction with a DLP system?",
      "options": [
        "Improving the accuracy of data backups.",
        "Enabling the DLP system to automatically identify and enforce policies based on data classification.",
        "Simplifying the process of data discovery and classification.",
        "Enhancing the performance of data encryption processes."
      ],
      "correctAnswer": 1,
      "explanation": "Data tags provide machine-readable classification that DLP systems can use to automatically apply relevant security policies."
    },
    {
      "id": 42,
      "question": "What is a key consideration when establishing data retention periods for different types of information?",
      "options": [
        "The cost of storing the data over time.",
        "The frequency with which the data is accessed.",
        "Legal and regulatory requirements, as well as business needs and potential future litigation.",
        "The technical limitations of the storage systems."
      ],
      "correctAnswer": 2,
      "explanation": "Data retention periods must primarily align with compliance obligations and legitimate business requirements, considering potential legal risks."
    },
    {
      "id": 43,
      "question": "What is the most significant risk associated with not deprovisioning user accounts promptly when employees leave the organisation?",
      "options": [
        "Increased cost of software licenses.",
        "Difficulty in managing email distribution lists.",
        "Potential for unauthorised access to sensitive information by former employees.",
        "Slower performance of authentication systems."
      ],
      "correctAnswer": 2,
      "explanation": "Prompt deprovisioning is crucial to prevent former employees from gaining unauthorised access to organisational resources."
    },
    {
      "id": 44,
      "question": "What is the primary goal of implementing a data classification scheme that includes labels like \"Public,\" \"Confidential,\" and \"Restricted\"?",
      "options": [
        "To track the physical location of data assets.",
        "To assign ownership and custodianship for data.",
        "To ensure consistent application of security controls based on the sensitivity of the data.",
        "To comply with specific industry regulations."
      ],
      "correctAnswer": 2,
      "explanation": "A data classification scheme provides a framework for applying appropriate and consistent security controls to information based on its sensitivity."
    },
    {
      "id": 45,
      "question": "What is a critical security practice for managing removable media containing sensitive information?",
      "options": [
        "Allowing unrestricted use of personal USB drives for convenience.",
        "Storing removable media in unlocked drawers for easy accessibility.",
        "Implementing policies for authorised use, encryption, and secure storage of removable media.",
        "Relying on users to self-manage the security of their removable media."
      ],
      "correctAnswer": 2,
      "explanation": "Removable media poses a risk of data leakage if not managed with appropriate security policies and controls, including encryption."
    },
    {
      "id": 46,
      "question": "What is the primary purpose of establishing data security controls and compliance requirements?",
      "options": [
        "To simplify the process of data backup and recovery.",
        "To improve the performance of data processing systems.",
        "To protect the confidentiality, integrity, and availability of information and meet applicable obligations.",
        "To reduce the cost of data storage and management."
      ],
      "correctAnswer": 2,
      "explanation": "Data security controls and compliance efforts are aimed at safeguarding information assets and adhering to relevant laws, regulations, and standards."
    },
    {
      "id": 47,
      "question": "What is the most significant risk associated with not having a formal asset management program?",
      "options": [
        "Difficulty in tracking software license compliance.",
        "Inefficient allocation of IT resources.",
        "Inability to effectively protect assets that are not identified and tracked.",
        "Increased cost of IT infrastructure maintenance."
      ],
      "correctAnswer": 2,
      "explanation": "You cannot secure what you do not know about, making asset management a foundational security practice."
    },
    {
      "id": 48,
      "question": "What is a key aspect of securely provisioning cloud-based infrastructure as a service (IaaS) resources?",
      "options": [
        "Assuming the cloud provider handles all security configurations by default.",
        "Using default security group rules for ease of deployment.",
        "Implementing and managing security controls for the operating systems, network configurations, and applications within the IaaS environment.",
        "Relying solely on the physical security of the cloud provider's data centres."
      ],
      "correctAnswer": 2,
      "explanation": "In IaaS, the customer retains significant responsibility for the security of their virtual infrastructure."
    },
    {
      "id": 49,
      "question": "What is the primary goal of implementing file integrity monitoring (FIM) tools?",
      "options": [
        "To monitor user access to sensitive files in real-time.",
        "To prevent unauthorised users from accessing file shares.",
        "To detect unauthorised changes to critical system files and applications.",
        "To encrypt files at rest on file servers."
      ],
      "correctAnswer": 2,
      "explanation": "FIM tools validate the integrity of files by detecting unauthorised modifications."
    },
    {
      "id": 50,
      "question": "An organisation needs to securely handle and store physical documents classified as \"Confidential.\" Which of the following controls is most appropriate?",
      "options": [
        "Leaving the documents in unlocked filing cabinets in common areas.",
        "Storing the documents in clearly labelled boxes in a publicly accessible storage room.",
        "Storing the documents in locked drawers or cabinets accessible only to authorised personnel.",
        "Placing the documents in shred bins once they are no longer actively used."
      ],
      "correctAnswer": 2,
      "explanation": "Physical security measures, such as locked storage, are necessary to protect confidential information in physical form."
    }
  ],
  flashCards: [

  ]
}; 