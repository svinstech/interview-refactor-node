import { JSONSchemaHash } from "./types";

const piiDependencies = () => {
  return {
      oneOf_01: [
        {
          properties: {
            "2019-07-01--HAS_ANY_PII": {
              type: "boolean",
              enum: [false],
            },
          },
        },
        {
          properties: {
            "2019-07-01--HAS_ANY_PII": {
              type: "boolean",
              enum: [true],
            },
            "2019-07-01--PII_AMOUNT": { $ref: "#/definitions/2019-07-01--PII_AMOUNT" },
          },
          required: ["2019-07-01--PII_AMOUNT"],
        },
      ],
    };
};

const engineeringContractorDependencies = () => {
    return {
      oneOf_02: [
        {
          properties: {
            "2019-07-01--HAS_ENGINEERING_CONTRACTORS": {
              type: "boolean",
              enum: [false],
            },
          },
        },
        {
          properties: {
            "2019-07-01--HAS_ENGINEERING_CONTRACTORS": {
              type: "boolean",
              enum: [true],
            },
            "2019-07-01--NUM_ENGINEERING_CONTRACTORS": { $ref: "#/definitions/2019-07-01--NUM_ENGINEERING_CONTRACTORS" },
          },
          required: ["2019-07-01--NUM_ENGINEERING_CONTRACTORS"],
        },
      ],
    };
  };

const benefitsDependencies = () => {
    return {
      oneOf_03: [
        {
          properties: {
            "2019-07-01--HAS_401K": {
              type: "boolean",
              enum: [false],
            },
          },
        },
        {
          properties: {
            "2019-07-01--HAS_401K": {
              type: "boolean",
              enum: [true],
            },
            "2019-07-01--BENEFITS_WORTH": { $ref: "#/definitions/2019-07-01--BENEFITS_WORTH" },
          },
          required: ["2019-07-01--BENEFITS_WORTH"],
        },
      ],
    };
  };

const pendingClaimsDependencies = () => {
    return {
      oneOf_04: [
        {
          properties: {
            "2019-07-01--HAS_PENDING_CLAIMS": {
              type: "boolean",
              enum: [false],
            },
          },
        },
        {
          properties: {
            "2019-07-01--HAS_PENDING_CLAIMS": {
              type: "boolean",
              enum: [true],
            },
            "2019-07-01--PENDING_CLAIMS_DESCRIPTION": { $ref: "#/definitions/2019-07-01--PENDING_CLAIMS_DESCRIPTION" },
          },
          required: ["2019-07-01--PENDING_CLAIMS_DESCRIPTION"],
        },
      ],
    };
  };

const currentClaimsDependencies = () => {
    return {
      oneOf_05: [
        {
          properties: {
            "2019-07-01--INSURANCE_HISTORY_CONTAINER": {
              type: "object",
              properties: {
                "2019-07-01--HAS_CURRENT_CLAIMS": {
                  type: "boolean",
                  enum: [false],
                },
              },
            },
          },
        },
        {
          properties: {
            "2019-07-01--INSURANCE_HISTORY_CONTAINER": {
              type: "object",
              properties: {
                "2019-07-01--HAS_CURRENT_CLAIMS": {
                  type: "boolean",
                  enum: [true],
                },
              },
            },
            "2019-07-01--CURRENT_CLAIMS_DESCRIPTION": { $ref: "#/definitions/2019-07-01--CURRENT_CLAIMS_DESCRIPTION" },
          },
          required: ["2019-07-01--CURRENT_CLAIMS_DESCRIPTION"],
        },
      ],
    };
  };

const deniedCoverageDependencies = () => {
    return {
      oneOf_06: [
        {
          properties: {
            "2019-07-01--INSURANCE_HISTORY_CONTAINER": {
              type: "object",
              properties: {
                "2019-07-01--HAS_DENIED_COVERAGE": {
                  type: "boolean",
                  enum: [false],
                },
              },
            },
          },
        },
        {
          properties: {
            "2019-07-01--INSURANCE_HISTORY_CONTAINER": {
              type: "object",
              properties: {
                "2019-07-01--HAS_DENIED_COVERAGE": {
                  type: "boolean",
                  enum: [true],
                },
              },
            },
            "2019-07-01--DENIED_COVERAGE_DESCRIPTION": { $ref: "#/definitions/2019-07-01--DENIED_COVERAGE_DESCRIPTION" },
          },
          required: ["2019-07-01--DENIED_COVERAGE_DESCRIPTION"],
        },
      ],
    };
  };

const filedLiabilityClaimDependencies = () => {
    return {
      oneOf_07: [
        {
          properties: {
            "2019-07-01--INSURANCE_HISTORY_CONTAINER": {
              type: "object",
              properties: {
                "2019-07-01--HAS_FILED_LIABILITY_CLAIM": {
                  type: "boolean",
                  enum: [false],
                },
              },
            },
          },
        },
        {
          properties: {
            "2019-07-01--INSURANCE_HISTORY_CONTAINER": {
              type: "object",
              properties: {
                "2019-07-01--HAS_FILED_LIABILITY_CLAIM": {
                  type: "boolean",
                  enum: [true],
                },
              },
            },
            "2019-07-01--PAYOUT_AMOUNT": { $ref: "#/definitions/2019-07-01--PAYOUT_AMOUNT" },
            "2019-07-01--PAYOUT_DESCRIPTION": { $ref: "#/definitions/2019-07-01--PAYOUT_DESCRIPTION" },
          },
          required: ["2019-07-01--PAYOUT_AMOUNT", "2019-07-01--PAYOUT_DESCRIPTION"],
        },
      ],
    };
  };

const insuranceRequirementsFormatDependencies = () => {
    return {
      oneOf_08: [
        {
          properties: {
            "2019-07-01--HAS_INSURANCE_REQS": {
              type: "boolean",
              enum: [false],
            },
          },
        },
        {
          properties: {
            "2019-07-01--INSURANCE_REQ_FORMAT": {
              type: "string",
              enum: ["manual"],
            },
            "2019-07-01--MANUAL_INSURANCE_REQS": { $ref: "#/definitions/2019-07-01--MANUAL_INSURANCE_REQS" },
          },
          required: ["2019-07-01--MANUAL_INSURANCE_REQS"],
        },
        {
          properties: {
            "2019-07-01--INSURANCE_REQ_FORMAT": {
              type: "string",
              enum: ["high-touch"],
            },
            "2019-07-01--HIGH_TOUCH_INSURANCE_REQS": { $ref: "#/definitions/2019-07-01--HIGH_TOUCH_INSURANCE_REQS" },
          },
          required: ["2019-07-01--HIGH_TOUCH_INSURANCE_REQS"],
        },
      ],
    };
  };

const fullTimeWorkerDependencies = () => {
    return {
      oneOf_09: [
        {
          properties: {
            "2019-07-01--NUM_FULL_TIME_WORKERS": {
              type: "number",
              maximum: 24,
            },
          },
        },
        {
          properties: {
            "2019-07-01--NUM_FULL_TIME_WORKERS": {
              type: "number",
              minimum: 25,
            },
            "2019-07-01--NUM_INVOLUNTARY_TERMINATION": { $ref: "#/definitions/2019-07-01--NUM_INVOLUNTARY_TERMINATION" },
            "2019-07-01--HAS_401K": { $ref: "#/definitions/2019-07-01--HAS_401K" },
          },
          required: ["2019-07-01--NUM_INVOLUNTARY_TERMINATION", "2019-07-01--HAS_401K"],
        },
      ],
    };
};

const applicationReviewRequirements = () => {
  const result = [];

  // boolean dependencies
  result.push(piiDependencies());
  result.push(engineeringContractorDependencies());
  result.push(benefitsDependencies());
  result.push(pendingClaimsDependencies());

  // insurance history container dependencies
  result.push(currentClaimsDependencies());
  result.push(deniedCoverageDependencies());
  result.push(filedLiabilityClaimDependencies());

  // numeric dependencies
  result.push(fullTimeWorkerDependencies());

  return result;
};

const schemaDefinition = () => {
  return {
      $schema: "http://json-schema.org/draft-04/schema#",
      type: "object",
      title: "Definition dictionary schema",
      allOf: applicationReviewRequirements(),
    };
};

export default schemaDefinition() as JSONSchemaHash;