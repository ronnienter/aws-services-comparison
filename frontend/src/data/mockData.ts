import { AWSService } from '../types';

export const mockServices: AWSService[] = [
  {
    id: "ec2",
    name: "Amazon EC2",
    category: "Compute",
    description: "Secure and resizable compute capacity for virtually any workload",
    pricing_model: "Pay-as-you-go",
    key_features: [
      "Virtual servers in the cloud",
      "Multiple instance types",
      "Auto Scaling",
      "Elastic Load Balancing",
      "Security groups"
    ],
    use_cases: [
      "Web hosting",
      "Application hosting",
      "High-performance computing",
      "Machine learning"
    ],
    free_tier: true,
    free_tier_details: "750 hours per month of t2.micro or t3.micro instances for 12 months",
    pricing_notes: [
      "On-Demand pricing",
      "Reserved Instances discounts",
      "Spot Instances for flexible workloads"
    ]
  },
  {
    id: "s3",
    name: "Amazon S3",
    category: "Storage",
    description: "Object storage built to retrieve any amount of data from anywhere",
    pricing_model: "Pay-as-you-go",
    key_features: [
      "99.999999999% (11 9's) durability",
      "Multiple storage classes",
      "Data encryption",
      "Versioning",
      "Cross-region replication"
    ],
    use_cases: [
      "Data backup and restore",
      "Data archiving",
      "Content distribution",
      "Static website hosting"
    ],
    free_tier: true,
    free_tier_details: "5 GB of Standard storage, 20,000 GET requests, 2,000 PUT requests per month for 12 months",
    pricing_notes: [
      "Storage pricing per GB",
      "Request pricing",
      "Data transfer costs"
    ]
  },
  {
    id: "rds",
    name: "Amazon RDS",
    category: "Database",
    description: "Managed relational database service for MySQL, PostgreSQL, Oracle, SQL Server, and MariaDB",
    pricing_model: "Pay-as-you-go",
    key_features: [
      "Multiple database engines",
      "Automated backups",
      "Multi-AZ deployments",
      "Read replicas",
      "Monitoring and metrics"
    ],
    use_cases: [
      "Web and mobile applications",
      "E-commerce platforms",
      "Online gaming",
      "Enterprise applications"
    ],
    free_tier: true,
    free_tier_details: "750 hours of db.t2.micro, db.t3.micro, or db.t4g.micro instances per month for 12 months",
    pricing_notes: [
      "Instance pricing",
      "Storage pricing",
      "I/O requests pricing"
    ]
  },
  {
    id: "lambda",
    name: "AWS Lambda",
    category: "Compute",
    description: "Run code without thinking about servers or clusters",
    pricing_model: "Pay-per-request",
    key_features: [
      "Event-driven execution",
      "Automatic scaling",
      "Built-in fault tolerance",
      "Multiple runtime support",
      "Integration with AWS services"
    ],
    use_cases: [
      "Serverless applications",
      "Real-time file processing",
      "Data transformation",
      "Backend services for mobile apps"
    ],
    free_tier: true,
    free_tier_details: "1 million free requests per month and 400,000 GB-seconds of compute time per month",
    pricing_notes: [
      "Per-request pricing",
      "Duration-based pricing",
      "Memory allocation affects cost"
    ]
  },
  {
    id: "cloudfront",
    name: "Amazon CloudFront",
    category: "Networking",
    description: "Fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs",
    pricing_model: "Pay-as-you-go",
    key_features: [
      "Global edge locations",
      "DDoS protection",
      "SSL/TLS encryption",
      "Real-time metrics",
      "Custom SSL certificates"
    ],
    use_cases: [
      "Website acceleration",
      "API acceleration",
      "Video streaming",
      "Software distribution"
    ],
    free_tier: true,
    free_tier_details: "1 TB of data transfer out and 10,000,000 HTTP or HTTPS requests per month for 12 months",
    pricing_notes: [
      "Data transfer pricing",
      "Request pricing",
      "Regional price variations"
    ]
  },
  {
    id: "dynamodb",
    name: "Amazon DynamoDB",
    category: "Database",
    description: "Fast and flexible NoSQL database service for single-digit millisecond performance at any scale",
    pricing_model: "Pay-as-you-go",
    key_features: [
      "Single-digit millisecond performance",
      "Fully managed",
      "Global tables",
      "Point-in-time recovery",
      "Auto scaling"
    ],
    use_cases: [
      "Mobile backends",
      "Web applications",
      "Gaming",
      "IoT applications"
    ],
    free_tier: true,
    free_tier_details: "25 GB of storage, 25 provisioned Write Capacity Units, and 25 provisioned Read Capacity Units",
    pricing_notes: [
      "On-demand pricing",
      "Provisioned capacity pricing",
      "Storage pricing"
    ]
  }
];

  {
    id: "apigateway",
    name: "Amazon API Gateway",
    category: "Networking",
    description: "Fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs",
    pricing_model: "Pay-per-request",
    key_features: [
      "RESTful APIs and WebSocket APIs",
      "Request/response transformations",
      "API versioning and staging",
      "Authentication and authorization",
      "Request throttling and caching"
    ],
    use_cases: [
      "Mobile backends",
      "Microservices architecture",
      "Serverless applications",
      "API monetization"
    ],
    free_tier: true,
    free_tier_details: "1 million API calls per month for REST APIs, 1 million messages and 750,000 connection minutes for WebSocket APIs",
    pricing_notes: [
      "Per-request pricing",
      "Data transfer charges",
      "Caching additional costs"
    ]
  }
];

export const mockCategories = [
  "Compute",
  "Storage", 
  "Database",
  "Networking",
  "Security",
  "Analytics",
  "Machine Learning",
  "Developer Tools"
];
