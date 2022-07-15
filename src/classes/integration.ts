import { DeltaIntegrationFlow } from '@4success/tunnelhub-sdk/src/classes/flows/deltaIntegrationFlow';
import { IntegrationMessageReturn, Metadata } from '@4success/tunnelhub-sdk';
import { GenericParameter, TunnelHubSystem } from '@4success/tunnelhub-sdk/src/types/data';
import { IntegrationModel } from '../data';

export default class Integration extends DeltaIntegrationFlow {
  private static keyFields: string[] = [
    'key_field',
  ];
  private static deltaFields: string[] = [
    'regular_field',
  ];

  private readonly parameters: { custom: GenericParameter[] };
  private readonly systems: TunnelHubSystem[];

  constructor(event: any, context: any) {
    super(event, Integration.keyFields, Integration.deltaFields, context);
    this.systems = event.systems ?? [];
    this.parameters = event.parameters ?? {};
    /**
     * It is mandatory have the constructor and call the super with event of main handler
     * You can get the systems configured in automation and save in class property for further use
     */
  }

  /* istanbul ignore next */
  defineMetadata(): Metadata[] {
    /**
     * Return all columns that will be visible in monitoring screen.
     * The components order is the display order in monitoring table
     *
     * The implementation of this method is mandatory
     */
    return [
      {
        fieldName: 'key_field',
        fieldLabel: 'Key field',
        fieldType: 'TEXT',
      },
      {
        fieldName: 'regular_field',
        fieldLabel: 'Regular field',
        fieldType: 'TEXT',
      },
    ];
  }

  async loadSourceSystemData(payload?: any): Promise<IntegrationModel[]> {
    /**
     * Return the source system data as a plain array of objets
     *
     * This is the method where you will extract your source data
     * If your automation is a webhook, the payload sent  will be avaiable in "payload" parameter.
     *
     * The implementation of this method is mandatory
     */
    return [
      {
        key_field: '1',
        regular_field: 'anyString',
      },
      {
        key_field: '2',
        regular_field: 'anotherString',
      },
    ];
  }

  async loadTargetSystemData(): Promise<IntegrationModel[]> {
    /**
     * Return target source system data as a plain array of objets
     * This is the method where you will extract your target data, for delta calculation
     */
    return [
      {
        key_field: '2',
        regular_field: 'oldAnotherString',
      },
      {
        key_field: '3',
        regular_field: 'anyotherstring',
      },
    ];
  }

  async insertAction(item: IntegrationModel): Promise<IntegrationMessageReturn> {
    /**
     * Create new items in the target system and return a message to moniroting
     */
    return ({
      data: {},
      message: 'Inserted successfully',
    });
  }

  async updateAction(oldItem: IntegrationModel, newItem: IntegrationModel): Promise<IntegrationMessageReturn> {
    return {
      /**
       * Update existing items in the target system and return a message to moniroting
       */
      data: {},
      message: 'Updated successfully',
    };
  }

  async deleteAction(item: IntegrationModel): Promise<IntegrationMessageReturn> {
    /**
     * Delete existing items in the target system not extracted on source system and return a message to moniroting
     */
    return ({
      data: {},
      message: 'Delete successfully',
    });
  }

}
