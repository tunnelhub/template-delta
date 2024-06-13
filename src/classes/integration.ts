import { DeltaIntegrationFlow } from '@tunnelhub/sdk/src/classes/flows/deltaIntegrationFlow';
import { IntegrationMessageReturn, Metadata } from '@tunnelhub/sdk';
import { GenericParameter, TunnelHubSystem } from '@tunnelhub/sdk/src/types/data';
import { IntegrationModel } from '../types';
import metadata from '../metadata';

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
     * It is mandatory to have the constructor call the super with the event of the main handler.
     * You can get the systems configured in automation and save them in a class attribute for further use.
     */
  }

  /* istanbul ignore next */
  defineMetadata(): Metadata[] {
    return metadata;
  }

  async loadSourceSystemData(payload?: any): Promise<IntegrationModel[]> {
    /**
     * Return the source system data as a plain array of objects
     *
     * This is the method where you will extract your source data
     * If your automation is a webhook, the payload sent will be available in the "payload" parameter.
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
     * Returns target source system data as a plain array of objects
     * This is the method where you will extract your target data for delta calculation
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
     * Create new items in the target system and return a message to the monitoring
     */
    return ({
      data: {},
      message: 'Inserted successfully',
    });
  }

  async updateAction(oldItem: IntegrationModel, newItem: IntegrationModel): Promise<IntegrationMessageReturn> {
    return {
      /**
       * Update existing items in the target system and return a message to the monitoring
       */
      data: {},
      message: 'Updated successfully',
    };
  }

  async deleteAction(item: IntegrationModel): Promise<IntegrationMessageReturn> {
    /**
     * Delete existing items in the target system not extracted from the source system and return a message to the monitoring
     */
    return ({
      data: {},
      message: 'Delete successfully',
    });
  }

}
