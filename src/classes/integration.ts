import { DeltaIntegrationFlow } from '@4success/tunnelhub-sdk/src/classes/flows/deltaIntegrationFlow';
import { IntegrationMessageReturn, Metadata } from '@4success/tunnelhub-sdk';
import { GenericParameter, TunnelHubSystem } from '@4success/tunnelhub-sdk/src/types/data';
import { IntegrationModel } from '../data';

export default class Integration extends DeltaIntegrationFlow {
  private static keyFields: string[] = ['key_field'];
  private static deltaFields: string[] = ['regular_field'];

  private readonly parameters: { custom: GenericParameter[] };
  private readonly systems: TunnelHubSystem[];

  constructor(event: any, context: any) {
    super(event, Integration.keyFields, Integration.deltaFields, context);

    this.systems = event.systems ?? [];
    this.parameters = event.parameters ?? {};
  }

  /* istanbul ignore next */
  defineMetadata = (): Metadata[] => [
    {
      fieldName: 'key_field',
      fieldLabel: 'Key field',
      fieldType: 'TEXT'
    },
    {
      fieldName: 'regular_field',
      fieldLabel: 'Regular field',
      fieldType: 'TEXT'
    }
  ];

  loadSourceSystemData = async (payload?: any): Promise<IntegrationModel[]> => [
    {
      key_field: '1',
      regular_field: 'anyString'
    },
    {
      key_field: '2',
      regular_field: 'anotherString'
    }
  ];

  loadTargetSystemData = async (): Promise<IntegrationModel[]> => [
    {
      key_field: '2',
      regular_field: 'oldAnotherString'
    },
    {
      key_field: '3',
      regular_field: 'anyotherstring'
    }
  ];

  insertAction = async (item: IntegrationModel): Promise<IntegrationMessageReturn> => ({
    data: {},
    message: 'Inserted successfully'
  });

  updateAction = async (oldItem: IntegrationModel, newItem: IntegrationModel): Promise<IntegrationMessageReturn> => ({
    data: {},
    message: 'Updated successfully'
  });

  deleteAction = async (item: IntegrationModel): Promise<IntegrationMessageReturn> => ({
    data: {},
    message: 'Delete successfully'
  });
}
